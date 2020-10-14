import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class IconSocial extends Component {
    render() {
        let { icon } = this.props
        let text = this.props.children.split('')
        return (
            <Fragment>
                <FontAwesomeIcon className='icon' icon={icon}></FontAwesomeIcon>
                <label> {text.map((letter, i) =>
                    <span key={i} style={getStyle(i, text.length)}>{letter}</span>)}
                </label>

            </Fragment >
        )
    }
}

const getStyle = (i, length) => {
    return {
        transitionDelay: `${(i / length) * 0.2}s`
    }
}
