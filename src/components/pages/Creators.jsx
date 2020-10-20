import React from 'react'
import SubPage from './SubPage'
import Header from './Header'
import Socials from './Socials'

import Hero from '../../styles/png/Hero.png'
import ReactLogo from '../../styles/svg/react-logo.svg'

export default function Creators() {
    let date = new Date()
    let birthday = new Date(1999, 8, 6)
    let age = date.getFullYear() - birthday.getFullYear();
    return (
        <SubPage name='creators'>
            <Header>Who made it?</Header>
            <section className='section section--head section--hero' >
                <img src={Hero} alt="HeroImage" className='heroImage' />
                <section className='text'>
                    I'm a {age} years old, self taught, web developer from
                    Poland, I also like to make
                    music, and I'm eager to share my
                    passion for it.
                </section>
            </section>
            <section className='section section--mid'>
                <section className='text'>
                    This is my first project build with React
                </section>
                <img src={ReactLogo} alt="Tape" />
            </section>
            <Socials></Socials>
        </SubPage>
    )
}
