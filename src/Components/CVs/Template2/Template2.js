import React from 'react'
import './Template2.css'


function Skills(props) {
    return (
        <div className='skills section'>
            <h2>Skills</h2>
            <div className='list'>
                <ul>
                    {props.skills.map(skill => {
                        return <li key={skill.key}>{skill.skillName}</li>
                    })}
                </ul>

                
            </div>
        </div>
    )
}

function Languages(props) {
    return (
        <div className='languages section'>
            <h2>Languages</h2>
            <div id='languages-list'>
                {props.languages.map(language => {
                    return  <div key={language.key} className='language'>
                                <div className='name'>{language.languageName}</div>
                                <div className='proficiency'>({language.proficiency})</div>
                            </div>
                })}
            </div>
        </div>
    )
}

function Experience(props) {
    return(
        <div className='section'>
            <h2>Experience</h2>
            {props.experiences.map(experience => {
                return  <div key={experience.key} className='job-container'>
                            <div className='flex' style={{justifyContent: 'space-between'}}>
                                <div className='flex column'>
                                    <h3 className='organization'>{experience.employer}</h3>
                                    <h3 className='position'>{experience.position}</h3>
                                </div>
                                <span className='timespan'>{experience.fromObj.month} {experience.fromObj.year} to {experience.toObj.month} {experience.toObj.year}</span>
                            </div>
                            <p>{experience.description}</p>
                        </div>
            })}
        </div>
    )
}

function Education(props) {
    return(
        <div className='section'>
            <h2>Education</h2>
            {props.educationArr.map(education => {
                return  <div key={education.key} className='education-container flex column'>
                            <div className='flex' style={{justifyContent: 'space-between'}}>
                                <div className='flex column'>
                                    <h3 className='institution'>{education.institution}</h3>
                                    <h3 className='degree'>{education.degree}</h3>
                                </div>
                                <span className='timespan'>{education.fromObj.month} {education.fromObj.year} to {education.toObj.month} {education.toObj.year}</span>
                            </div>
                            {education.description}
                        </div>
            })}
        </div>
    )
}

function Template2(props) {
    const data = props.data
    return (
        <div className='cv template2 flex column main-container'>
            <div className='flex top'>
                <div className='title-container flex column align-center'>
                    <div className='name'>
                        <span style={{color: 'var(--quaternary)'}}>{data.firstname}</span>
                        <span> {data.lastname}</span>
                    </div>
                    <div className='profession'>
                        <span>Web Developer</span>
                    </div>
                </div>
                <div className='photo-container'>
                    <img src={data.photoURL} alt=''></img>
                </div>
            </div>
            <div className='flex column bottom'>

            </div>
        </div>
    )
}

export default Template2