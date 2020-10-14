import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                    <a href="http://instagram.com">
                        <IconSocial icon={faInstagramSquare}>
                            Follow
                        </IconSocial>
                    </a>
                </li>
                <li>
                    <a href="http://instagram.com">
                        <IconSocial icon={faFacebookSquare}>
                            Like
                        </IconSocial>
                    </a>
                </li>
                <li>
                    <a href="http://instagram.com">
                        <IconSocial icon={faGitSquare}>
                            Collaborate
                        </IconSocial>
                    </a>
                </li>
                <li>
                    <a href="http://instagram.com">
                        <IconSocial icon={faYoutubeSquare}>
                            Watch
                        </IconSocial>
                    </a>
                </li>
                <li>
                    <a href="http://instagram.com">
                        <IconSocial icon={faLinkedin}>
                            Link In
                    </IconSocial>
                    </a>
                </li>
            </ul>
        </section >
    )
}
