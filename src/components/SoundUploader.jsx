import React, { Component } from 'react'
import soundWave from '../styles/svg/sound-wave.svg'

export default class soundUploader extends Component {

    constructor(props) {
        super(props)

            this.state = {
                sound: sessionStorage.getItem('uploadedSound')
            }
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    onLoaded = (e) => {
        let base64URL;
        const file = e.target.files[0]
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
            base64URL = fileReader.result
            this.props.addCustomSound(base64URL)
            this.setState({ sound: file.name })
        })
        fileReader.readAsDataURL(file)

    }

    componentWillUnmount() {
            sessionStorage.setItem('uploadedSound', this.state.sound)
    }

    render() {
        return (
            <form className="soundUploader fileInput" onSubmit={this.onSubmit}>
                <input type="file" className="fileInput__input" name="fileInput" id="fileInput" accept='audio/*' onChange={this.onLoaded.bind(this)} />
                <label className="fileInput__label" htmlFor="fileInput">
                    <img src={soundWave} alt="soundWave" />

                    <p> {this.state.sound ? this.state.sound : "Drop mp3 file here to make a custom sample!"}</p>

                </label>

            </form>
        )
    }
}
