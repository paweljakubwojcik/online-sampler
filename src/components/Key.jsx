import React, { Component } from 'react'

//import soundSource from '../sounds/PianoSample.mp3'

export default class key extends Component {

    id

    constructor(props) {
        super(props)

        let { name, defaultTriggerKey, black, transpose } = this.props.note

        this.rate = Math.pow(2, transpose / 12)
        this.state = {
            loaded: true,
            clicked: false,
            keyPressed: false,
            triggerKey: defaultTriggerKey
        }
        this.black = black
        this.name = name
    }


    componentDidMount() {

        document.body.addEventListener('keypress', (e) => {

            if (this.state.triggerKey === e.key.toUpperCase() && !this.state.keyPressed)
                this.setState({ keyPressed: true })
        })
        document.body.addEventListener('keyup', (e) => {

            if (this.state.triggerKey === e.key.toUpperCase() && this.state.keyPressed)
                this.setState({ keyPressed: false })
        })
    }

    onMouseDown = () => {
        this.setState({ clicked: true })
    }

    onMouseUp = () => {
        if (this.state.clicked)
            this.setState({ clicked: false })
    }

    onMouseEnter = () => {
        if (this.props.keyboardActive)
            this.setState({ clicked: true })
    }

    onMouseOut = () => {
        if (this.state.clicked)
            this.setState({ clicked: false })
    }


    render() {

        let { howler } = this.props

        if (this.state.keyPressed || this.state.clicked) {
            console.log(`${this.name}`, !howler.playing(this.id))
            if (!howler.playing(this.id)) {
                this.id = howler.play()
                howler.rate(this.rate, this.id)
                console.log(this.id)
                console.log(`${this.name} is playing!!`)
            }
        }
        else {
            if (howler.playing(this.id) && this.id) {
                howler.stop(this.id)
                console.log(`${this.name} has stopped!!`)
            }
        }

        return (
            <div id={this.name} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} onMouseOut={this.onMouseOut} onMouseEnter={this.onMouseEnter}
                className={`key key--${this.black ? 'black' : 'white'} 
                    ${(this.state.keyPressed || this.state.clicked) ? 'key--active' : ''}
                    ${!this.state.loaded ? 'key--loading' : ''}`}></div>

        )
    }
}
