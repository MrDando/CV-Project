import React from 'react'
import './Template1.css'

import Skills from './Personal/Skills'
import Languages from './Personal/Languages'

function Experience(props) {
    return(
        <div>
            <h2>Experience</h2>
            {props.experiences.map(experience => {
                return  <div key={experience.key} className='job-container'>
                            <div className='flex'>
                                <h3 className='position'>{experience.position}</h3>
                                <h3 className='organization-name'>{experience.employer}</h3>
                                <span className='timespan'>{experience.from.year} to {experience.to.year}</span>
                            </div>
                            <p>{experience.description}</p>
                        </div>
            })}
        </div>
    )
}

function Education(props) {
    return(
        <div>
            <h2>Education</h2>
            {props.educationArr.map(education => {
                return  <div key={education.key} className='education-container flex column'>
                            <div className='flex'>
                                <div>
                                    <h4>{education.institution}</h4>
                                    <h4>{education.degree}</h4>
                                </div>
                                <span className='timespan'>{education.fromObj.year} to {education.toObj.year}</span>
                            </div>
                            {education.description}
                        </div>
            })}
        </div>
    )
}

function Template1(props) {
    const data = props.data
    return (
        <div className='cv template1 flex'>
            <div className='personal flex column'>
                <div className='name flex column'>
                    <span className='firstname'>{data.firstname}</span>
                    <span className='lastname'>{data.lastname}</span>
                </div>
                <div className='photo-container'>
                    <img src='#' alt=''></img>
                </div>
                <div className='contact section'>
                    <h2>Contact</h2>
                    <div className='address category'>
                        <div className='category-name'>Adress:</div>
                        <div className='value'>{data.adress}</div>
                    </div>
                    <div className='phone category'>
                        <div className='category-name'>Phone:</div>
                        <div className='value'>{data.phone}</div>
                    </div>
                    <div className='email category'>
                        <div className='category-name'>email:</div>
                        <div className='value'>{data.email}</div>
                    </div>
                    <div className='linkedin category'>
                        <div className='category-name'>LinkedIn:</div>
                        <div className='value'>{data.linkedIn}</div>
                    </div>
                </div>
                <Skills skills={data.skills}/>
                <Languages languages={data.languages}/>
            </div>
            <div className='professional flex column'>
                <div>
                    <h2>Summary</h2>
                    <p>{data.summary}</p>
                </div>
                <Experience experiences={data.experiences}/>
                <Education educationArr={data.educationArr}/>
            </div>
        </div>
    )
}

export default Template1