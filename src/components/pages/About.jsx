import React from 'react'
import SubPage from './SubPage'
import Header from './Header'

import Mellotron from '../../styles/png/Mellotron.png'
import Tape from '../../styles/svg/cassette-tape.svg'

export default function About() {
    return (
        <SubPage name='about'>
            <Header>How it works</Header>
            <article className='section section--head'>
                <img src={Mellotron} alt="Mellotron" />
                <section className='text'>
                    Mellotron is a real world instrument. Invented in 1963, The
                    Beatles used the instrument on several tracks, including the hit
                    single "Strawberry Fields Forever". The Mellotron was
                    subsequently used by groups like King Crimson and Genesis,
                    becoming a common instrument in progressive rock.
                </section>
            </article>
            <article className='section section--mid'>
                <section className='text'>
                    Mellotron uses the same concept as a sampler, but generates its sound using analogue samples recorded on audio tape rather than digital samples.
                    Since OnlineMellotron is a digital creation it's obviously using digital samples, but way of playing them is same as in it originator. Sounds aren't looped, and diffrent pitch is achieved by varying the speed of sample.
                     
                </section>
                <img src={Tape} alt="Tape" />
            </article>
        </SubPage>
    )
}
