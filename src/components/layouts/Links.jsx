import React from 'react'

import { Link, useRouteMatch } from 'react-router-dom'

export default function Links() {

    return (
        <menu className="links">
            <Link to="/about"
                className={`link ${useRouteMatch('/about') ? 'link--active' : ''}`}>
                How it works?
            </Link>
            <Link to="/creators"
                className={`link ${useRouteMatch('/creators') ? 'link--active' : ''}`}>
                Who made it?
                </Link>
            <Link to="/learn-more"
                className={`link ${useRouteMatch('/learn-more') ? 'link--active' : ''}`}>
                Learn more
                </Link>
        </menu>
    )

}
