import React, { Component } from 'react'

export default class SampleMenu extends Component {
    render() {
        return (
            <div className="sampleMenu">
                <header>Choose a Sound</header>
                <div className="sampleMenu__menu">
                    <button className="menuButton sampleMenu__button">Piano</button>
                    <button className="menuButton sampleMenu__button">Strings</button>
                    <button className="menuButton sampleMenu__button">Vocals</button>
                    <button className="menuButton sampleMenu__button">Synth</button>
                    <button className="menuButton sampleMenu__button">Pads</button>
                    <button className="menuButton sampleMenu__button">Custom</button>
                </div>
            </div>
        )
    }
}
