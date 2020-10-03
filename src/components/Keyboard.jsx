import React, { Component } from 'react'
import Key from './Key'



export default class Keyboard extends Component {

    whiteNotes = []
    blackNotes = []

    constructor(props) {
        super(props)

        let notes = [
            { name: 'C1', defaultTriggerKeys: ['Q'] },
            { name: 'Db1', defaultTriggerKeys: ['2'] },
            { name: 'D1', defaultTriggerKeys: ['W'] },
            { name: 'Eb1', defaultTriggerKeys: ['3'] },
            { name: 'E1', defaultTriggerKeys: ['E'] },
            { name: 'ghost11' },
            { name: 'F1', defaultTriggerKeys: ['R'] },
            { name: 'Gb1', defaultTriggerKeys: ['5'] },
            { name: 'G1', defaultTriggerKeys: ['T'] },
            { name: 'Ab1', defaultTriggerKeys: ['6'] },
            { name: 'A1', defaultTriggerKeys: ['Y'] },
            { name: 'Bb1', defaultTriggerKeys: ['7'] },
            { name: 'B1', defaultTriggerKeys: ['U', 'Z'] },
            { name: 'ghost12' },
            { name: 'C2', defaultTriggerKeys: ['X'] },
            { name: 'Db2', defaultTriggerKeys: ['D'] },
            { name: 'D2', defaultTriggerKeys: ['C'] },
            { name: 'Eb2', defaultTriggerKeys: ['F'] },
            { name: 'E2', defaultTriggerKeys: ['V', 'X'] },
            { name: 'ghost21' },
            { name: 'F2', defaultTriggerKeys: ['B'] },
            { name: 'Gb2', defaultTriggerKeys: ['H'] },
            { name: 'G2', defaultTriggerKeys: ['N'] },
            { name: 'Ab2', defaultTriggerKeys: ['J'] },
            { name: 'A2', defaultTriggerKeys: ['M'] },
            { name: 'Bb2', defaultTriggerKeys: ['K'] },
            { name: 'B2', defaultTriggerKeys: [','] },
            { name: 'ghost22' },
            { name: 'C3', defaultTriggerKeys: ['.'] }
        ]


        // sortowanie klawiszy i przypisanie im poszczególnych wartośći do transponowania
        let i = -12;
        notes.forEach((note) => {
            if (note.name.length > 3) {
                this.blackNotes.push({ name: note.name, black: true })
            } else {
                if (note.name.length === 2)
                    this.whiteNotes.push({ name: note.name, defaultTriggerKeys: note.defaultTriggerKeys, black: false, transpose: i })
                if (note.name.length === 3)
                    this.blackNotes.push({ name: note.name, defaultTriggerKeys: note.defaultTriggerKeys, black: true, transpose: i })
                i++;
            }

        });

    }

    state = {
        active: false,
        editMode: false
    }

    componentDidMount() {
        document.body.addEventListener('click', (e) => {
            if (!e.target.classList.contains('key') && !e.target.classList.contains('keyboard'))
                this.toggleEditMode(false)
        })
    }

    onMouseDown = () => {
        if (!this.state.editMode)
            this.setState({ active: true })
    }

    onMouseUp = () => {
        this.setState({ active: false })
    }

    onMouseLeave = () => {
        if (this.state.active)
            this.setState({ active: false })
    }

    toggleEditMode = (bool) => {
        this.setState({ editMode: bool, active: false })

    }


    render() {
        console.log('rendered')
        //context provider ogarnąć!!
        console.log(this.props.howler)
        return null
        // return (

        //     <div className="keyboard"
        //         onMouseDown={this.onMouseDown}
        //         onMouseUp={this.onMouseUp}
        //         onMouseLeave={this.onMouseLeave}
        //         onTouchStart={this.onMouseDown}
        //         onTouchEnd={this.onMouseUp}>

        //         <div className="blackKeys">
        //             {this.blackNotes.map(note =>
        //                 <Key key={note.name} keyboardActive={this.state.active} note={note} howler={this.props.howler} editMode={this.state.editMode} toggleEditMode={this.toggleEditMode} />)}
        //         </div>
        //         {this.whiteNotes.map(note =>
        //             <Key key={note.name} keyboardActive={this.state.active} note={note} howler={this.props.howler} editMode={this.state.editMode} toggleEditMode={this.toggleEditMode} />)}
        //     </div>

        // )
    }
}
