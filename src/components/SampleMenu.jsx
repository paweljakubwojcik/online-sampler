import React, { Component } from 'react'

export default class SampleMenu extends Component {

    instruments = ['Piano', 'Strings', 'Vocals', 'Synth', 'Pads', 'Custom']



    onClick = (e) => {
        this.props.changeInstrument(e.target.value)
    }


    render() {
        let activeInstrument = this.props.instrument;
        return (
            <div className="sampleMenu">
                <header>Choose a Sound</header>
                <div className="sampleMenu__menu">
                    {this.instruments.map(instrument =>
                        <button key={instrument} onClick={this.onClick}
                            className={`menuButton sampleMenu__button ${activeInstrument === instrument ? 'sampleMenu__button--active' : ''}`}
                            value={instrument}>
                            {instrument}
                        </button>
                    )}
                </div>
            </div>
        )
    }
}
