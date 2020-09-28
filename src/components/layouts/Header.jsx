import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='mainHeader'>
            <Link to='/'><h1 className='logo'>Online Mellotron</h1></Link>
            <p>Awake your creativity</p>
        </header>
    )
}
