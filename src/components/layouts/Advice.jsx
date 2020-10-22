import React, { Component, Fragment } from 'react'

import RandomMelody from "./RandomMelody"

///////////////////////////refactor needed//////////////////////////

export default class Advice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            advise: this.getRandomAdvise()
        }
    }

    refreshTime = 1000000;
    adviceIndex = -1;


    advices = [
        <Fragment>
            <p>
                You can also
                play using
                keybord.
            </p>
            <p>
                Try typing<br></br>
                <RandomMelody></RandomMelody>
            </p>
        </Fragment>,
        <Fragment>
            <p>
                To change mapping of keys, click one while holding Ctrl
         </p>
        </Fragment>
    ]


    getRandomAdvise = () => {
        let x = Math.floor(Math.random() * this.advices.length)
        if (x !== this.adviceIndex) {
            this.adviceIndex = x
            return this.advices[x]
        }
        else {
            return this.getRandomAdvise()
        }

    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({ advise: this.getRandomAdvise() })
        }, this.refreshTime)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {
        return (
            <div className="advice">
                {this.state.advise}
            </div>
        )
    }
}
