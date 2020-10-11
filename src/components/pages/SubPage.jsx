import React from 'react'
import { Link } from 'react-router-dom'
import { changeOrientation } from '../../globalMethods'

export default function SubPage(props) {
    return (
        <div className={"page page__" + props.name}>
            {props.children}
            <Link className="back" to='/' onClick={changeOrientation}>Go back</Link>
        </div>
    )
}
