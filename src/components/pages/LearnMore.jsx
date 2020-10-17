import React from 'react'
import SubPage from './SubPage'
import Header from './Header'
import YTChannel from './YTChannel'

import Andrew from '../../styles/jpg/andrew.jpg'
import Sanj from '../../styles/jpg/Sanjay.jpg'
import InTheMix from '../../styles/jpg/InTheMix.jpg'
import Teatro from '../../styles/jpg/Teatro.jpg'

import Ableton from '../../styles/png/Ableton.png'

export default function LearnMore() {
    return (
        <SubPage name='learnMore'>
            <Header>Learn More</Header>
            <section className='section section--head' >
                <img src={Ableton} style={{ transform: 'scale(1.5)', transformOrigin: 'right', filter: 'brightness(.8)' }} alt="DAW" />
                <section className='text'>
                    If you're interested in learning more about music production there is a few resources that I can recommend
                </section>
            </section>
            <section className='section section--recommendation' >
                <h3>Good yt channels to learn music production</h3>
                <div className="channels">
                    <YTChannel
                        image={Andrew}
                        name={'Andrew Huang'}
                        description={'All about music production , weird instrument etc.'}
                        href={'https://www.youtube.com/user/songstowearpantsto'}
                    ></YTChannel>
                    <YTChannel
                        image={InTheMix}
                        name={'In The Mix'}
                        description={'In The Mix is all about simplifying the recording, production, mixing and mastering process.'}
                        href={'https://www.youtube.com/c/inthemix/featured'}
                    ></YTChannel>
                    <YTChannel
                        image={Sanj}
                        name={'Sanjay C'}
                        description={'Music production, gear, and tips.'}
                        href={'https://www.youtube.com/c/SanjayC/featured'}
                    ></YTChannel>
                    <YTChannel
                        image={Teatro}
                        name={'Teatro'}
                        description={'live performances, tutorials, soundpacks and more!'}
                        href={'https://www.youtube.com/c/Taetro/about'}
                    ></YTChannel>
                </div>




            </section>
        </SubPage>
    )
}
