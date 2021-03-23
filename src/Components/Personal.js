import React from 'react'
import './personal.css'

import Name from './Personal/Name'
import Contact from './Personal/Contact'
import Skills from './Personal/Skills'
import Languages from './Personal/Languages'

function Personal(props) {
    const {firstname, lastname, adress, phone, email, linkedIn} = props.data
    return (
        <div className='personal flex column'>
            <Name   firstname={firstname}
                    lastname={lastname}/>
            <div className='photo-container'>
                <img src='#' alt=''></img>
            </div>
            <Contact    adress={adress}
                        phone={phone}
                        email={email}
                        linkedIn={linkedIn}/>
            <Skills />
            <Languages />
        </div>
    )
    
}

export default Personal