import React from 'react'
import Links from './Links'
import { Link, useLocation } from 'react-router-dom'

export default function Header(props) {

    let location = useLocation();
    let isSubpage = location.pathname !== '/'

    return (
        <header className={`mainHeader ${isSubpage ? 'mainHeader--subPage' : ''}`}>
            <Link to='/' className='headerContainer'>
                <h1 className='logo logo--left'>Online</h1>
                <h1 className='logo logo--right'>Mellotron </h1>
            </Link>
            <Links />
            <p>Awake creativity</p>
        </header>
    )
}
