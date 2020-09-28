import React, { Component } from 'react'

export default class key extends Component {

    state = {
        active: false
    }

    onMouseDown = () => {
        this.setState({ active: true })
    }

    onMouseUp = () => {
        this.setState({ active: false })
    }

    onMouseEnter = () => {
        if (this.props.keyboardActive)
            this.setState({ active: true })
    }


    render() {
        return (
            <React.Fragment>
                <div id={this.props.id} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} onMouseOut={this.onMouseUp} onMouseEnter={this.onMouseEnter}
                    className={`key key--${this.props.black ? 'black' : 'white'} ${this.state.active ? 'key--active' : ''}`}></div>
            </React.Fragment>
        )
    }
}
