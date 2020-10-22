import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Key from './Key'
import ErrorMessage from './ErrorMessage'

//refactor needed
//add type props
// rename methods on -> handle
//wywalić to co nie musi byc własciwością obiektu


export default class Keyboard extends Component {

    /**
     * function for pure visual effect
     * afer each iteration of loading animation, key are 'loaded' in diffrent order
     */
    assignNewLoadingOrder = () => {
        blackNotes.forEach(note => { note.loadingOrder = Math.random() * 24 })
        whiteNotes.forEach(note => { note.loadingOrder = Math.random() * 24 })
    }

    state = {
        active: false, //means sound is being played
        editMode: false // means keyMap is edited
    }

    componentDidMount() {
        document.body.addEventListener('click', this.handleClickOnWindow)
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.handleClickOnWindow)
    }

    handleClickOnWindow = (e) => {
        if (!e.target.classList.contains('key') && !e.target.classList.contains('keyboard'))
            this.toggleEditMode(false)
    }

    handleMouseDown = () => {
        if (!this.state.editMode)
            this.setState({ active: true })
    }

    handleMouseUp = () => {
        this.setState({ active: false })
    }

    handleMouseLeave = () => {
        if (this.state.active)
            this.setState({ active: false })
    }

    toggleEditMode = (bool) => {
        this.setState({ editMode: bool, active: false })

    }


    render() {
        let { errors, loading, loadingProgress, howler } = this.props
        let isError = errors.length !== 0
        if (loadingProgress === 0) {
            this.assignNewLoadingOrder()
        }
        return (
            <div className={`keyboard ${loading ? "keyboard--loading" : ""}`}
                onMouseDown={this.handleMouseDown}
                onMouseUp={this.handleMouseUp}
                onMouseLeave={this.handleMouseLeave}
                onTouchStart={this.handleMouseDown}
                onTouchEnd={this.handleMouseUp}>

                <div className="blackKeys">
                    {blackNotes.map(note =>
                        <Key key={note.name}
                            keyboardActive={this.state.active}
                            note={note}
                            howler={howler}
                            editMode={this.state.editMode}
                            toggleEditMode={this.toggleEditMode}
                            isErrors={isError}
                            isLoading={loading && loadingProgress < note.loadingOrder} />)}
                </div>
                {whiteNotes.map(note =>
                    <Key key={note.name}
                        keyboardActive={this.state.active}
                        note={note}
                        howler={howler}
                        editMode={this.state.editMode}
                        toggleEditMode={this.toggleEditMode}
                        isErrors={isError}
                        isLoading={loading && loadingProgress < note.loadingOrder}
                    />)}
                {isError ? <ErrorMessage errors={errors} /> : null}
            </div>

        )
    }
}

Keyboard.propTypes = {
    errors: PropTypes.arrayOf(PropTypes.string),
    loading: PropTypes.bool,
    loadingProgress: PropTypes.number
}

const notes = [
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
    { name: 'C2', defaultTriggerKeys: ['X', 'I'] },
    { name: 'Db2', defaultTriggerKeys: ['D', '9'] },
    { name: 'D2', defaultTriggerKeys: ['C', 'O'] },
    { name: 'Eb2', defaultTriggerKeys: ['F'] },
    { name: 'E2', defaultTriggerKeys: ['V'] },
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

let whiteNotes = []
let blackNotes = []

// sortowanie klawiszy i przypisanie im poszczególnych wartośći do transponowania

notes.forEach((note, i) => {
    i -= 12;
    if (note.name.length > 3) {
        blackNotes.push({ name: note.name, black: true })
    } else {
        if (note.name.length === 2)
            whiteNotes.push({
                name: note.name,
                defaultTriggerKeys: note.defaultTriggerKeys,
                black: false,
                transpose: i,
                loadingOrder: Math.random() * 24
            })
        if (note.name.length === 3)
            blackNotes.push({
                name: note.name,
                defaultTriggerKeys: note.defaultTriggerKeys,
                black: true,
                transpose: i,
                loadingOrder: Math.random() * 24
            })

    }
});