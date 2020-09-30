import React, { Component } from 'react'

export default class editMapButton extends Component {


    render() {
        return (
            <button className="editMap" onClick={this.props.toggleEditMode}>
                Ikonka jakaś tu będzie
            </button>
        )
    }
}


