import React, { Component } from 'react'
import Key from './Key'


export default class Keyboard extends Component {

    notes = [
        { name: 'C1', defaultTriggerKey: 'Q' },
        { name: 'Db1', defaultTriggerKey: '2' },
        { name: 'D1', defaultTriggerKey: 'W' },
        { name: 'Eb1', defaultTriggerKey: '3' },
        { name: 'E1', defaultTriggerKey: 'E' },
        { name: 'ghost11' },
        { name: 'F1', defaultTriggerKey: 'R' },
        { name: 'Gb1', defaultTriggerKey: '5' },
        { name: 'G1', defaultTriggerKey: 'T' },
        { name: 'Ab1', defaultTriggerKey: '6' },
        { name: 'A1', defaultTriggerKey: 'Y' },
        { name: 'Bb1', defaultTriggerKey: '7' },
        { name: 'B1', defaultTriggerKey: 'U' },
        { name: 'ghost12' },
        { name: 'C2', defaultTriggerKey: 'X' },
        { name: 'Db2', defaultTriggerKey: 'D' },
        { name: 'D2', defaultTriggerKey: 'C' },
        { name: 'Eb2', defaultTriggerKey: 'F' },
        { name: 'E2', defaultTriggerKey: 'V' },
        { name: 'ghost21' },
        { name: 'F2', defaultTriggerKey: 'B' },
        { name: 'Gb2', defaultTriggerKey: 'H' },
        { name: 'G2', defaultTriggerKey: 'N' },
        { name: 'Ab2', defaultTriggerKey: 'J' },
        { name: 'A2', defaultTriggerKey: 'M' },
        { name: 'Bb2', defaultTriggerKey: 'K' },
        { name: 'B2', defaultTriggerKey: ',' },
        { name: 'ghost22' },
        { name: 'C3', defaultTriggerKey: '.' }
    ]


    whiteNotes = []
    blackNotes = []

    componentDidMount() {
        console.log('mount')
        console.log(this.notes, this.whiteNotes, this.blackNotes)
        let i = -12;
        this.notes.forEach((note) => {
            if (note.name.length > 3) {
                this.blackNotes.push({ name: note.name, black: true })
            } else {
                if (note.name.length === 2)
                    this.whiteNotes.push({ name: note.name, defaultTriggerKey: note.defaultTriggerKey, black: false, transpose: i })
                if (note.name.length === 3)
                    this.blackNotes.push({ name: note.name, defaultTriggerKey: note.defaultTriggerKey, black: true, transpose: i })
                i++;
            }

        });
    }



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
        console.log('rendered')
        return (
            <div className="keyboard" onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}>
                <div className="blackKeys">
                    {this.blackNotes.map(note => <Key key={note.name} keyboardActive={this.state.active} note={note} />)}
                </div>
                {this.whiteNotes.map(note => <Key key={note.name} keyboardActive={this.state.active} note={note} />)}
            </div>
        )
    }
}
