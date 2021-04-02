import React from 'react'
import './Template2.css'


function Skills(props) {
    return (
        <div>
            {props.skills.map(skill => {
            return <div key={skill.key} className='item-row'>{skill.skillName}</div>
        })}
        </div>
    )
}

function Languages(props) {
    return (
        <div>
            {props.languages.map(language => {
                return  <div key={language.key} className='flex item-row'>
                            <div>{language.languageName}</div>
                            <div style={{marginLeft: '10px'}}>({language.proficiency})</div>
                        </div>
            })}
        </div>
    )
}

function Experience(props) {
    return(
        <div>
            {props.experiences.map(experience => {
                return  <div key={experience.key} className='job-container flex'>
                            <div>
                                <p className='timespan'>{experience.fromObj.year} - {experience.toObj.year}</p>
                            </div>
                            <div className='flex column'>
                                <div className='flex' style={{marginBottom: '15px'}}>
                                    <span>{experience.position.toUpperCase()}</span>
                                    <span style={{marginLeft: '20px'}}>{experience.employer}</span>
                                </div>
                                <p>{experience.description}</p>
                            </div>                          
                        </div>
            })}
        </div>
    )
}

function Education(props) {
    return(
        <div>
            {props.educationArr.map(education => {
                return  <div key={education.key}>
                            <h3 className='degree'>{education.degree}</h3>
                            <h3 className='institution'>{education.institution}</h3>
                            <span>{education.fromObj.year} - {education.toObj.year}</span>
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
                        <span className='firstname'>{data.firstname}</span>
                        <span> {data.lastname}</span>
                    </div>
                    <div className='profession'>
                        <span>{data.profession}</span>
                    </div>
                </div>
                <div className='photo-container'>
                    <img src={data.photoURL} alt=''></img>
                </div>
            </div>
            <div className='flex column bottom'>
                <div className='flex section-row'>
                    <div className='contact'>
                        <h2>CONTACT</h2>
                        <div className='flex align-center contact-row'>
                            <i className="fas fa-home fa-lg icon"></i>
                            <p>{data.adress}</p>
                        </div>
                        <div className='flex align-center contact-row'>
                            <i className="fas fa-phone fa-lg icon"></i>
                            <p>{data.phone}</p>
                        </div>
                        <div className='flex align-center contact-row'>
                            <i className="fas fa-at fa-lg icon"></i>
                            <p>{data.email}</p>
                        </div>
                        <div className='flex align-center contact-row'>
                            <i className="fab fa-linkedin fa-lg icon"></i>
                            <p>{data.linkedIn}</p>
                        </div>
                    </div>
                    <div className='summary'>
                        <h2>SUMMARY</h2>
                        <span>{data.summary}</span>
                    </div>
                </div>
                <div className='flex section-row' style={{justifyContent: 'space-between'}}>
                    <div className='education'>
                        <h2>EDUCATION</h2>
                        <Education educationArr={data.educationArr}/>
                    </div>
                    <div className='skills'>
                        <h2>SKILLS</h2>
                        <Skills skills={data.skills}/>
                    </div>
                    <div className='languages'>
                        <h2>LANGUAGES</h2>
                        <Languages languages={data.languages} />
                    </div>
                </div>
                <div>
                    <h2>EXPERIENCE</h2>
                    <Experience experiences={data.experiences} />
                </div>
            </div>
        </div>
    )
}

export default Template2