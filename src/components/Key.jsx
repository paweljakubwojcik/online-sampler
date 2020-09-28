import React, { Component } from 'react'
import { Howl } from 'howler';
import soundSource from '../sounds/snare.mp3'

export default class key extends Component {

    sound

    componentDidMount() {

        this.setState({ triggerKey: this.props.note.triggerKey })

        console.log('component did mount')
        this.sound = new Howl({
            src: [soundSource],
            volume: 0.5,
            rate: Math.pow(2, this.props.note.transpose / 12),
            onload: () => {
                console.log('loaded')
                this.setState({ loaded: true })
            },
            onloaderror: (id, e) => {
                console.log(e)
            }
        });
    }


    play = () => {
        this.setState({ active: true })
        this.sound.play();
        console.log('im playing')
    }

    stop = () => {
        this.setState({ active: false })
        this.sound.stop();
        console.log('i stopped')
    }

    state = {
        loaded: false,
        active: false,
        triggerKey: ''
    }

    onMouseDown = () => {
        this.play()
    }

    onMouseUp = () => {
        if (this.state.active)
            this.stop()
    }

    onMouseEnter = () => {
        if (this.props.keyboardActive)
            this.play();
    }


    render() {
        return (
            <React.Fragment>
                <div id={this.props.note.name} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} onMouseOut={this.onMouseUp} onMouseEnter={this.onMouseEnter}
                    className={`key key--${this.props.note.black ? 'black' : 'white'} 
                    ${this.state.active ? 'key--active' : ''}
                    ${!this.state.loaded ? 'key--loading' : ''}`}></div>
            </React.Fragment>
        )
    }
}
