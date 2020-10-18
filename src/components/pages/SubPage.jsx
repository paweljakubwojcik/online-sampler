import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { changeOrientation } from '../../globalMethods'

import { gsap, TweenLite } from 'gsap'


export default function SubPage(props) {
    const t = gsap.timeline()
    useEffect(() => {
        changeOrientation()
        TweenLite.to('.background', { opacity: 1 })
        t.to('.subHeader > h2', { opacity: 1, duration: .2 })
            .from('.line', { scaleX: 0, duration: .8 })
            .from('.background', { scaleY: 0, duration: .8 }, '-=.4')
            .fromTo('.section', { opacity: 0 }, { opacity: 1 }, '-=.2')
            .from('.text', { xPercent: -20, duration: .4 }, '-=.4')
        return () => {
            t.kill()
        }
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
