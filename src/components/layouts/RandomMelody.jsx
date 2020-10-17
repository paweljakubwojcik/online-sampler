import React from 'react'


const melodies = [
    'NVV BCC XVN NVV BCC XVX',
    'V F V F V Z C X Y',
    'DZD 5 CDCD Z CDC5 U YUY6UY '
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
