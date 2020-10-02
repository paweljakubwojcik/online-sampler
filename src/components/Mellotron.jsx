import React, { Component } from 'react'

import Keyboard from './Keyboard'
import BackgroundImage from './layouts/BackgroungImage'


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
        this.updateHowler()
        this.errors = []
    }

    state = {
        sounds: [
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
                src: '' //to be changed
            }]
    }



    addCustomSound = (path) => {
        let custom = this.state.sounds.find(sound => sound.name === 'Custom')
        custom = { name: 'Custom', src: path }
        this.setState(({ sounds }) => {
            return { sounds: sounds.filter(sound => sound.name !== 'Custom').concat(custom) }
        })
    }

    actualPath = this.state.sounds[0].src //default state

    HOWLER = {
        howler: null,
        update: function (src) {
            if (this.howler)
                this.howler.unload()

            this.howler = new Howl({
                src: [src],
                onload: () => {
                    console.log(`loaded ${src}`)
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

            console.log(this.howler)
        },
        appendError: (e) => {
            this.errors.push(e)
            alert(e)
        }
    }


    componentDidUpdate() {
        this.updateHowler()
    }

    updateHowler = () => {
        let instrument = this.state.sounds.find(instrument => instrument.name === this.props.instrument)
        this.actualPath = instrument.src || this.actualPath
        let src = this.actualPath
        this.HOWLER.update(src)
    }

    render() {
        return (
            <React.Fragment>
                <Keyboard howler={this.HOWLER} />
                <BackgroundImage instrument={this.props.instrument} addCustomSound={this.addCustomSound} />
            </React.Fragment>
        )
    }
}
