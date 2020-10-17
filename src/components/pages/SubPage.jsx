import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { changeOrientation } from '../../globalMethods'



export default function SubPage(props) {
    useEffect(() => {
        changeOrientation()
    });
    return (
        <div className={"page page__" + props.name}>
            {props.children}
            <section className="section section--footer">
                <Link className="back" to='/' >Go back</Link>
            </section>
        </div>
    )
}
