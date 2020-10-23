import React from 'react'

export default function Header(props) {
    let bigWord = props.children.split(' ')[0].toUpperCase().split('')
    return (
        <div className='subHeader'>
            <h2 style={{ opacity: 0 }}> {props.children}</h2>
            <div className="line"></div>
            <div className="background" style={{ opacity: 0 }}></div>
            <label className="label">
                {bigWord.map((letter, i) => <div key={i} className='letter'>{letter}</div>)}
            </label>
        </div>
    )
}
