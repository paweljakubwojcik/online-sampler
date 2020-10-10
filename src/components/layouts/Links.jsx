import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class Links extends Component {
    render() {
        return (
            <div className="links">
                <Link to="/about">How it works?</Link>
                <Link to="/creators">Who made it?</Link>
                <Link to="/learn-more">Learn more</Link>
            </div>
        )
    }
}
