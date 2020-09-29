import React, { Component } from 'react'

import Keyboard from './Keyboard'

import { soundList } from '../sounds/soundList'
import { Howl } from 'howler';

export default class Mellotron extends Component {

    constructor(props) {
        super(props)
    }

    howler
    updateHowler = () => {

        let instrument = soundList.find(instrument => instrument.name === this.props.instrument)
        let src = instrument.src


        if (this.howler)
            this.howler.unload()

        this.howler = new Howl({
            src: [src],
            onload: () => {
                console.log(`loaded ${instrument.src}`)
            },
            onloaderror: (id, e) => {
                console.log(e)
            }
        })
    }

    render() {
        console.log('rendered melloron')
        this.updateHowler()
        return (
            <Keyboard howler={this.howler} />
        )
    }
}
