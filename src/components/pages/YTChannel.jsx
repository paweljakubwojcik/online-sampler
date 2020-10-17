import React from 'react'

export default function YTChannel(props) {
    let { name, description, image, href } = props
    return (
        <a href={href} className={`ytChannel`}>
            <img src={image} alt={name} />
            <div className='ytChannel--info'>
                <header>{name}</header>
                <p>{description}</p>
                <span></span>
            </div>
        </a>
    )
}
