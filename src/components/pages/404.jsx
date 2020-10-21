import React from 'react'
import Header from './Header'
import SubPage from './SubPage'

export default function page404() {
    return (
        <SubPage name='404'>
            <Header>
                {'404 page not found'}
            </Header>
        </SubPage>
    )
}
