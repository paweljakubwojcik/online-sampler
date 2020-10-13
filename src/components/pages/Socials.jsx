import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInstagramSquare,
    faFacebookSquare,
    faGitSquare,
    faYoutubeSquare,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'

export default function Socials() {
    return (
        <section className="section socials">
            <ul>
                <li>
                    <a href="http://instagram.com">
                        <FontAwesomeIcon className='icon' icon={faInstagramSquare}></FontAwesomeIcon>
                        <span>Follow</span>
                    </a>

                </li>
                <li>
                    <a href="http://instagram.com">
                        <FontAwesomeIcon className='icon' icon={faFacebookSquare}></FontAwesomeIcon>
                        <span>Like</span>
                    </a>
                </li>
                <li>
                    <a href="http://instagram.com">
                        <FontAwesomeIcon className='icon' icon={faGitSquare}></FontAwesomeIcon>
                        <span>Collaborate</span>
                    </a>
                </li>
                <li>
                    <a href="http://instagram.com">
                        <FontAwesomeIcon className='icon' icon={faYoutubeSquare}></FontAwesomeIcon>
                        <span>Watch</span>
                    </a>
                </li>
                <li>
                    <a href="http://instagram.com">
                        <FontAwesomeIcon className='icon' icon={faInstagramSquare}></FontAwesomeIcon>
                        <span>Follow</span>
                    </a>
                </li>
                <li>
                    <a href="http://instagram.com">
                        <FontAwesomeIcon className='icon' icon={faLinkedin}></FontAwesomeIcon>
                        <span>Link In</span>
                    </a>
                </li>
            </ul>
        </section >
    )
}
