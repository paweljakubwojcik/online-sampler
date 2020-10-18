import React from 'react'
import SounUploader from '../SoundUploader'

import { SwitchTransition, Transition } from 'react-transition-group'
import { TweenLite } from 'gsap'



export default function BackgroungImage(props) {

    let { instrument, addCustomSound } = props

    return (

        <SwitchTransition>
            <Transition
                key={instrument}
                timeout={400}
                onEnter={(node) => show(node)}
                onExiting={(node) => hide(node)}>
                {
                    instrument === 'Custom' ?
                        <SounUploader addCustomSound={addCustomSound} /> :
                        <div className={`backgroundImage backgroundImage--${instrument}`}></div>
                }
            </Transition>
        </SwitchTransition >

    )

}


const show = (node) => {
    TweenLite.from(node, { filter: 'blur(50px)', opacity: .5, duration: .6 })

}
const hide = (node) => {
    TweenLite.to(node, { filter: 'blur(50px)', opacity: .5, duration: .6 })
}

