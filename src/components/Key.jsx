import React, { Component } from 'react'

//import soundSource from '../sounds/PianoSample.mp3'

export default class key extends Component {

    id

    constructor(props) {
        super(props)
        this.rate = Math.pow(2, this.props.note.transpose / 12)
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

    state = {
        loaded: true,
        clicked: false,
        keyPressed: false,
        triggerKey: this.props.note.defaultTriggerKey
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
        if (this.state.keyPressed || this.state.clicked) {

            if (!this.props.howler.playing(this.id)) {
                this.id = this.props.howler.play()
                this.props.howler.rate(this.rate, this.id)
                console.log(this.id)
            }
        }
        else {
            if (this.id) {
                this.props.howler.stop(this.id)
                console.log(`${this.props.note.name} is stopped!!`)
            }
        }

        return (
            <div id={this.props.note.name} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} onMouseOut={this.onMouseOut} onMouseEnter={this.onMouseEnter}
                className={`key key--${this.props.note.black ? 'black' : 'white'} 
                    ${(this.state.keyPressed || this.state.clicked) ? 'key--active' : ''}
                    ${!this.state.loaded ? 'key--loading' : ''}`}></div>

        )
    }
}
