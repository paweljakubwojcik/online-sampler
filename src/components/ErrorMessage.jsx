import React from 'react'

export default function ErrorMessage(props) {

    let { errors } = props


    return (
        <div className='errorMessage'>
            {errors.map((error, i) => <p key={i}>{error}</p>)}
        </div>
    )
}
