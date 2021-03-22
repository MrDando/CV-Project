import React from 'react'
import './personal.css'

import Name from './Personal/Name'
import Contact from './Personal/Contact'
import Skills from './Personal/Skills'
import Languages from './Personal/Languages'

function Personal() {
    return (
        <div className='personal flex column'>
            <Name />
            <div className='photo-container'>
                <img src='#' alt=''></img>
            </div>
            <Contact />
            <Skills />
            <Languages />
        </div>
    )
    
}

export default Personal