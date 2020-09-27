import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {
    return (
        <div className="sideBar">
            <div className="links">
                <Link to="/about">How does it work?</Link>
                <Link to="/creators">Who made it?</Link>
                <Link to="/learn-more">How can I learn more about music production?</Link>
                <Link to="/support">How can I support you?</Link>
            </div>
        </div>
    )
}
