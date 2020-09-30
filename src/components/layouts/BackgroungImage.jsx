import React from 'react'
import SounUploader from '../SoundUploader'


export default function BackgroungImage(props) {

    if (props.instrument === 'Custom')
        return (

            <SounUploader addCustomSound={props.addCustomSound} />

        )


    return (
        <div className={`backgroundImage backgroundImage--${props.instrument}`}></div>
    )


}


