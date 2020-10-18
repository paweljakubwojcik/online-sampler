import React from 'react'
import {
    faInstagramSquare,
    faFacebookSquare,
    faGitSquare,
    faYoutubeSquare,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'

import IconSocial from './IconSocial'

export default function Socials() {
    return (
        <section className="section socials">
            <ul>
                <li>
                    <a target='blank' href="https://www.instagram.com/pafefeu/">
                        <IconSocial icon={faInstagramSquare}>
                            Follow
                        </IconSocial>
                    </a>
                </li>
                <li>
                    <a target='blank' href="https://www.facebook.com/profile.php?id=100003889069327">
                        <IconSocial icon={faFacebookSquare}>
                            Like
                        </IconSocial>
                    </a>
                </li>
                <li>
                    <a target='blank' href="https://github.com/paweljakubwojcik">
                        <IconSocial icon={faGitSquare}>
                            Collaborate
                        </IconSocial>
                    </a>
                </li>
                <li>
                    <a target='blank' href="https://www.youtube.com/channel/UCHInPtspnooQOVfqxFijunA?view_as=subscriber">
                        <IconSocial icon={faYoutubeSquare}>
                            Watch
                        </IconSocial>
                    </a>
                </li>
                <li>
                    <a target='blank' href="https://www.linkedin.com/in/pawe%C5%82-w%C3%B3jcik-154ba81a2/">
                        <IconSocial icon={faLinkedin}>
                            Link In
                    </IconSocial>
                    </a>
                </li>
            </ul>
        </section >
    )
}
