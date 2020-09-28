import React, { Component } from 'react'
import Key from './Key'


export default class Keyboard extends Component {

    whiteNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
    blackNotes = ['Db', 'Eb', 'ghost1', 'Gb', 'Ab', 'Bb', 'ghost2']

    state = {
        active: false
    }

    onMouseDown = () => {
        this.setState({ active: true })
    }

    onMouseUp = () => {
        this.setState({ active: false })
    }


    render() {
        return (
            <div className="keyboard" onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}>
                <div className="blackKeys">
                    {this.blackNotes.map(note => <Key black={true} id={note + '1'} key={note + '1'} keyboardActive={this.state.active} />)}
                    {this.blackNotes.map(note => <Key black={true} id={note + '2'} key={note + '2'} keyboardActive={this.state.active} />)}
                </div>
                {this.whiteNotes.map(note => <Key black={false} id={note + '1'} key={note + '1'} keyboardActive={this.state.active} />)}
                {this.whiteNotes.map(note => <Key black={false} id={note + '2'} key={note + '2'} keyboardActive={this.state.active} />)}
                <Key black={false} id={'C3'} />
            </div>
        )
    }
}
