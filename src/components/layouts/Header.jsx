import React from 'react'
import Links from './Links'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {

    let location = useLocation();
    let isSubpage = location.pathname !== '/'

    return (
        <header className={`mainHeader ${isSubpage ? 'mainHeader--subPage' : ''}`}>
            <div className='headerContainer' >
                <Link to='/' className='logo logo--left' ><h1> Online</h1></Link>
                <Link to='/' className='logo logo--right' ><h1>Mellotron</h1></Link>
                <p>Awake creativity</p>
            </div>
            <span className='placeHolder'></span>
            <Links />

        </header>
    )
}
