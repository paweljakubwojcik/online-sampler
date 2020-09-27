import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div className="page page__about">
            <h1>about</h1>
            <Link className="back" to='/'>Go back</Link>
        </div>
    )
}
