import React from 'react'
import { Link } from 'react-router-dom'
import { changeOrientation } from '../../globalMethods'

export default function About() {
    return (
        <div className="page page__about">
            <h1>about</h1>
            <Link className="back" to='/' onClick={changeOrientation}>Go back</Link>
        </div>
    )
}
