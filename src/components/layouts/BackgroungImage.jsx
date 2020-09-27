import React, { Component } from 'react'
import violin from '../../styles/svg/violin.svg'

export default class BackgroungImage extends Component {
    render() {
        return (
            <img className="backgroundImage" src={violin} alt="violin" />
        )
    }
}

