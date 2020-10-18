import React, { useEffect } from 'react'
import Advice from './Advice'
import { TweenLite } from 'gsap'


export default function SideBar() {

    useEffect(() => {
        TweenLite.from('.sideBar', { xPercent: -100 })
    })

    return (
        <div className="sideBar">
            <Advice></Advice>
        </div>
    )
}
