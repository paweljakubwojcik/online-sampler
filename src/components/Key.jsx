import React, { Component } from 'react'

//import soundSource from '../sounds/PianoSample.mp3'

export default class key extends Component {

    id //id of played sound

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
        document.body.addEventListener('keypress', this.handleKeyPressed)
        document.body.addEventListener('keyup', this.hadleKeyUp)
        document.body.addEventListener('click', this.onWindowClick)
    }

    componentWillUnmount() {
        document.body.removeEventListener('keypress', this.handleKeyPressed)
        document.body.removeEventListener('keyup', this.hadleKeyUp)
        document.body.removeEventListener('click', this.onWindowClick)
    }

    onWindowClick = (e) => {
        if (!e.target.classList.contains('key') && !e.target.classList.contains('keyboard'))
            this.setState({ edit: false })
    }

    handleKeyPressed = (e) => {
        let key = e.key.toUpperCase()
        if (this.props.editMode) {
            if (this.state.edit) {
                let triggerKey;
                if (!this.state.triggerKey.includes(key)) {
                    triggerKey = this.state.triggerKey.concat(key)
                }
                else {
                    triggerKey = this.state.triggerKey.filter(element => element !== key)
                }
                this.setState({ triggerKey, edit: false })
            }
        }
        else {
            if (this.state.triggerKey.includes(key) && !this.state.keyPressed)
                this.setState({ keyPressed: true, activeKey: key })
        }
    }

    hadleKeyUp = (e) => {
        let key = e.key.toUpperCase()
        if (this.props.editMode) {
        } else
            if (this.state.activeKey === key && this.state.keyPressed)
                this.setState({ keyPressed: false, activeKey: false })
    }

    handleMouseDown = (e) => {
        if (e.ctrlKey) {
            this.setState(({ edit }) => { return { edit: !edit } })
            this.props.toggleEditMode(true)
        }
        else
            if (this.props.editMode)
                this.setState(({ edit }) => { return { edit: !edit } })
            else
                this.setState({ clicked: true })
    }

    handleMouseUp = () => {
        if (this.state.clicked)
            this.setState({ clicked: false })
    }

    handleMouseEnter = () => {
        if (this.props.keyboardActive)
            this.setState({ clicked: true })
    }

    handleMouseOut = () => {
        if (this.state.clicked)
            this.setState({ clicked: false })
    }

    componentDidUpdate() {
        //playing or stoping sounds
        let { howler } = this.props.howler


        if (this.state.keyPressed || this.state.clicked) {
            if (!howler.playing(this.id) || !this.id) {
                this.id = howler.play()
                howler.rate(this.rate, this.id)

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
    }

    render() {
        let { isErrors, isLoading, editMode } = this.props
        return (
            <div id={this.name} onClick={this.onClick}
                onMouseDown={this.handleMouseDown}
                onMouseUp={this.handleMouseUp}
                onMouseOut={this.handleMouseOut}
                onMouseEnter={this.handleMouseEnter}
                onTouchStart={this.handleMouseDown}
                onTouchEnd={this.handleMouseUp}
                className={`key key--${this.black ? 'black' : 'white'} 
                    ${(this.state.keyPressed || this.state.clicked) ? 'key--active' : ''}
                    ${(editMode) ? 'key--editable' : ''}
                    ${(this.state.edit && editMode) ? 'key--edit' : ''}
                    ${(isErrors || isLoading) ? 'key--loading' : ''}
                    `}>

                <div className="trigger">{
                    this.state.triggerKey.map((key) => <p key={key}>{key}</p>)}
                </div>
            </div>

        )
    }
}
