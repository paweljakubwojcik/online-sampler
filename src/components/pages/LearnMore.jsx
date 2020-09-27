import React from 'react'
import { Link } from 'react-router-dom'

export default function LearnMore() {
    return (
        <div className="page page__learnMore">
            <h1>Learn More</h1>
            <Link className="back" to='/'>Go back</Link>
        </div>
    )
}
