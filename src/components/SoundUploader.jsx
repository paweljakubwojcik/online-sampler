import React, { Component } from 'react'
import soundWave from '../styles/svg/sound-wave.svg'

export default class soundUploader extends Component {
    render() {
        return (
            <form className="soundUploader fileInput" action="">
                <input type="file" className="fileInput__input" name="fileInput" id="fileInput" />
                <label className="fileInput__label" htmlFor="fileInput">
                    <img src={soundWave} alt="" />
                    <p>Drop mp3 file here to make a custom sample!</p>

                </label>

            </form>
        )
    }
}
