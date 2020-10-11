import React from 'react'
import Links from './Links'
import { Link, useLocation } from 'react-router-dom'
import { changeOrientation } from '../../globalMethods'

export default function Header() {

    let location = useLocation();
    let isSubpage = location.pathname !== '/'

    return (
        <header className={`mainHeader ${isSubpage ? 'mainHeader--subPage' : ''}`}>
            <h1 className='headerContainer' >
                <Link to='/' className='logo logo--left' onClick={changeOrientation}>Online</Link>
                <Link to='/' className='logo logo--right' onClick={changeOrientation}>Mellotron </Link>
            </h1>
            <Links />
            <p>Awake creativity</p>
        </header>
    )
}
