import React from 'react'


const melodies = [
    'NVV BCC XVN NVV BCC XVX',
    'NVV BCC XVN NVV 2',
    'NVV BCC XVN NVV 3'
]

function getRandomMelody() {
    let x = Math.floor(Math.random() * melodies.length)
    return melodies[x]
}

export default function RandomMelody() {
    return (
        <>
            {getRandomMelody()}
        </>
    )
}
