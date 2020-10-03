import React from 'react'

export default function ErrorMessage(props) {

    let { errors } = props

    if (errors.length === 0)
        return null
    else

        return (
            <div className='errorMessage'>
                {errors.map((error, i) => <p key={i}>{error}</p>)}
            </div>
        )
}
