import React from 'react'

import { Link, useRouteMatch } from 'react-router-dom'
import { changeOrientation } from '../../globalMethods'

export default function Links() {

    return (
        <div className="links">
            <Link to="/about"
                className={`link ${useRouteMatch('/about') ? 'link--active' : ''}`}
                onClick={changeOrientation}>
                How it works?
            </Link>
            <Link to="/creators"
                className={`link ${useRouteMatch('/creators') ? 'link--active' : ''}`}
                onClick={changeOrientation}>
                Who made it?
                </Link>
            <Link to="/learn-more"
                className={`link ${useRouteMatch('/learn-more') ? 'link--active' : ''}`}
                onClick={changeOrientation}>
                Learn more
                </Link>
        </div>
    )

}
