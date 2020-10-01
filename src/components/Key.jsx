import React, { Component } from 'react'

//import soundSource from '../sounds/PianoSample.mp3'

export default class key extends Component {

    id

    constructor(props) {
        super(props)

        let { name, defaultTriggerKeys, black, transpose } = this.props.note

        this.rate = Math.pow(2, transpose / 12)
        this.state = {
            loaded: true,
            clicked: false,
            keyPressed: false,
            triggerKey: defaultTriggerKeys ? defaultTriggerKeys : ['']
        }
        this.black = black
        this.name = name

    }


    componentDidMount() {

        document.body.addEventListener('keypress', (e) => {
            let key = e.key.toUpperCase()
            if (this.props.editMode) {
                if (this.state.edit) {
                    if (!this.state.triggerKey.includes(key)) {
                        let triggerKey = this.state.triggerKey.concat(key)
                        this.setState({ triggerKey })
                    }
                    else {
                        let triggerKey = this.state.triggerKey.filter(element => element !== key)
                        this.setState({ triggerKey })
                    }
                }
            }
            else {
                if (this.state.triggerKey.includes(key) && !this.state.keyPressed)
                    this.setState({ keyPressed: true, activeKey: key })
            }
        })
        document.body.addEventListener('keyup', (e) => {
            let key = e.key.toUpperCase()
            if (this.props.editMode) {

            } else
                if (this.state.activeKey === key && this.state.keyPressed)
                    this.setState({ keyPressed: false, activeKey: false })
        })
    }

    onMouseDown = () => {
        if (!this.props.editMode)
            this.setState({ clicked: true })
    }

    onMouseUp = () => {
        if (!this.props.editMode)
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

    onClick = () => {
        if (this.props.editMode)
            this.setState((state) => { return { edit: !state.edit } })
    }


    render() {

        let { howler } = this.props

        if (this.state.keyPressed || this.state.clicked) {
            if (!howler.playing(this.id) || !this.id) {
                this.id = howler.play()
                howler.rate(this.rate, this.id)
                console.log(this.id)
                console.log(`${this.name} is playing!!`)
            }
        }
        else {
            if (howler.playing(this.id) && this.id) {
                howler.once('fade', () => {
                    howler.stop(this.id)
                })
                howler.fade(0.5, 0, 50, this.id)

                console.log(`${this.name} has stopped!!`)
            }
        }

        return (
            <div id={this.name} onClick={this.onClick}
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
                onMouseOut={this.onMouseOut}
                onMouseEnter={this.onMouseEnter}
                onTouchStart={this.onMouseDown}
                onTouchEnd={this.onMouseUp}
                className={`key key--${this.black ? 'black' : 'white'} 
                    ${(this.state.keyPressed || this.state.clicked) ? 'key--active' : ''}
                    ${(this.state.edit && this.props.editMode) ? 'key--editable' : ''}`}>

                {this.props.editMode ?
                    this.state.triggerKey.map((key) =>
                        <div key={key} className="trigger">{key}</div>) : ''}
            </div>

        )
    }
}
