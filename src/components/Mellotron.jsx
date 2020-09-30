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
                src: PadsSample //to be changed
            }]
    }


    updateHowler = () => {

        let instrument = this.state.sounds.find(instrument => instrument.name === this.props.instrument)
        let src = instrument.src

        if (this.howler)
            this.howler.unload()

        this.howler = new Howl({
            src: [src],
            onload: () => {
                console.log(`loaded ${instrument.src}`)
            },
            onplay: (id) => {
                this.howler.fade(0, 0.5, 100, id)
            },
            onloaderror: (id, e) => {
                console.log(e)
            },
            onplayerror: (id, e) => {
                console.log(id, e)
            }
        })
    }

    render() {
        this.updateHowler()
        return (
            <React.Fragment>
                <Keyboard howler={this.howler} play={this.play} stop={this.stop} />
                <BackgroundImage instrument={this.props.instrument} /></React.Fragment>
        )
    }
}
