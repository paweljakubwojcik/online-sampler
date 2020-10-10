import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (

        <header className='mainHeader'>
            <Link to='/'>
                <h1 className='logo logo--left'>Online</h1>
                <h1 className='logo logo--right'>Mellotron </h1>
            </Link>
            <p>Awake creativity</p>
        </header>
    )
}
