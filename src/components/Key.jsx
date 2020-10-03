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

        //events onkey press
        document.body.addEventListener('keypress', (e) => {
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
        })
        document.body.addEventListener('keyup', (e) => {
            let key = e.key.toUpperCase()
            if (this.props.editMode) {
            } else
                if (this.state.activeKey === key && this.state.keyPressed)
                    this.setState({ keyPressed: false, activeKey: false })
        })

        document.body.addEventListener('click', (e) => {
            if (!e.target.classList.contains('key') && !e.target.classList.contains('keyboard'))
                this.setState({ edit: false })
        })
    }

    onMouseDown = (e) => {
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
                    ${(this.props.editMode) ? 'key--editable' : ''}
                    ${(this.state.edit && this.props.editMode) ? 'key--edit' : ''}
                    ${(this.props.errors || this.props.loading) ? 'key--loading' : ''}
                    `}>

                <div className="trigger">{
                    this.state.triggerKey.map((key) => <p key={key}>{key}</p>)}
                </div>
            </div>

        )
    }
}
