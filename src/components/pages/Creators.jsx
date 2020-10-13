import React from 'react'
import SubPage from './SubPage'
import Header from './Header'
import Socials from './Socials'

import Hero from '../../styles/png/Hero.png'
import ReactLogo from '../../styles/svg/react-logo.svg'

export default function Creators() {
    return (
        <SubPage name='creators'>
            <Header>Who made it?</Header>
            <section className='section section--head section--hero' >
                <img src={Hero} alt="HeroImage" className='heroImage' />
                <section className='text shortText'>
                    I'm a 20 years old front dev from
                    Poland, I also like to make
                    music, and I'm eager to share my
                    passion for creating music.
                </section>
            </section>
            <section className='section section--mid'>
                <section className='text'>
                    This is my first project build using React
                </section>
                <img src={ReactLogo} alt="Tape" />
            </section>
            <Socials></Socials>
        </SubPage>
    )
}
