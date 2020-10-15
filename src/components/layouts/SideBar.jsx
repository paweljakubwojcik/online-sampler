import React from 'react'
import Advice from './Advice'


export default function SideBar() {

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    return (
        <div className="sideBar">
            {!isMobile && <Advice></Advice>}
        </div>
    )
}
