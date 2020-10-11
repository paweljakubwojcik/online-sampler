import React from 'react'

export default function Header(props) {
    let bigWord = props.children.split(' ')[0].toUpperCase().split('')
    return (
        <div class='subHeader'>
            <h2> {props.children}</h2>
            <div className="line"></div>
            <label className="label">
                {bigWord.map(letter => <div className='letter'>{letter}</div>)}
            </label>
        </div>
    )
}
