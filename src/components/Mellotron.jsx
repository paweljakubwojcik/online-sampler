import React, { Component } from 'react'

import Keyboard from './Keyboard'
import BackgroundImage from './layouts/BackgroungImage'
import SampleMenu from './SampleMenu'


import { Howl } from 'howler';

//sounds
import PianoSample from '../sounds/PianoSample.mp3'
import StringsSample from '../sounds/StringsSample.mp3'
import VocalSample from '../sounds/VocalSample.mp3'
import SynthSample from '../sounds/SynthSample.mp3'
import PadsSample from '../sounds/PadsSample.mp3'

export default class Mellotron extends Component {

    constructor(props) {
        super(props)

        let defaultInstrument = sessionStorage.getItem('instrument') || 'Piano'

        this.state = {
            instrument: {
                name: defaultInstrument || 'Piano',
                src: this.sounds.find(instrument => instrument.name === defaultInstrument).src
            },
            loading: false,
            errors: []
        }


    }

    componentDidMount() {
        this.HOWLER.update(this.state.instrument.src)
    }


    sounds = [
        {
            name: 'Piano',
            src: PianoSample
        },
        {
            name: 'Strings',
            src: StringsSample
        },
        {
            name: 'Vocals',
            src: VocalSample
        },
        {
            name: 'Synth',
            src: SynthSample
        },
        {
            name: 'Pads',
            src: PadsSample
        },
        {
            name: 'Custom',
        }]


    /**
     * Change instrument to one of the default values
     * to load a custom sample use method addCustomSample
     * @param {String} name 'Piano' | 'Strings' | 'Vocals | 'Synth | 'Pads | 'Custom'
     */
    changeInstrument = (name) => {

        let newInstrument = this.sounds.find(instrument => instrument.name === name)
        this.setState({ instrument: newInstrument }, () => {
            this.HOWLER.update(this.state.instrument.src)
        })

        sessionStorage.setItem('instrument', newInstrument.name)
    }


    /**
     *
     * @param {String} path base 64 data url example: 'data:audio/mpeg;base64,//{-data-}'
     */
    addCustomSound = (path) => {
        const instrument = { name: 'Custom', src: path }
        this.sounds.pop()
        this.sounds.push(instrument)
        this.setState({ instrument }, () => {
            this.HOWLER.update(this.state.instrument.src)
        })
    }

    /**
     * howler object that contains reference to Howl with loaded asynchronously sound
     */
    HOWLER = {
        howler: null,
        ancestor: this,
        update: function (src) {
            this.ancestor.beginLoading()
            if (this.howler)
                this.howler.stop()
            this.howler = new Howl({
                src: [src],
                onload: () => {
                    console.log(`loaded ${src}`)
                    this.ancestor.setState({ errors: [] })
                    this.ancestor.stopLoading()
                },
                onplay: (id) => {
                    this.howler.fade(0, 0.5, 100, id)
                },
                onloaderror: (id, e) => {
                    this.appendError(e)
                },
                onplayerror: (id, e) => {
                    this.appendError(e)
                }
            })
        },
        appendError: (e) => {
            this.setState(({ errors }) => ({ errors: errors.concat(e) }))
            this.setState({ loading: false })
            this.stopLoading()
        }
    }

    beginLoading = () => {
        clearInterval(this.timerID)
        this.setState({ loadingProgress: 0, loading: true, errors: [] })
        this.timerID = setInterval(this.incerementProgress, 25)

    }
    stopLoading = () => {
        this.setState({ loading: false })
        clearInterval(this.timerID)
    }

    incerementProgress = () => {
        this.setState(({ loadingProgress }) => {
            if (loadingProgress <= 24)
                loadingProgress++
            else
                loadingProgress = 0
            return { loadingProgress }
        })
    }


    render() {
        return (
            <React.Fragment>
                <SampleMenu changeInstrument={this.changeInstrument} instrument={this.state.instrument.name} />
                <Keyboard howler={this.HOWLER} errors={this.state.errors} loading={this.state.loading} loadingProgress={this.state.loadingProgress} />
                <BackgroundImage instrument={this.state.instrument.name} addCustomSound={this.addCustomSound} />
            </React.Fragment>
        )
    }
}
