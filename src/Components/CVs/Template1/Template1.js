import React from 'react'
import './Template1.css'


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
                console.log(experience)
                return  <div key={experience.key} className='job-container'>
                            <div className='flex' style={{justifyContent: 'space-between'}}>
                                <div className='flex column'>
                                    <h3 className='organization-name'>{experience.employer}</h3>
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
                                    <h3>{education.institution}</h3>
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

function Template1(props) {
    const data = props.data
    return (
        <div className='cv template1 flex'>
            <div className='personal flex column'>
                <div className='name flex column'>
                    <span className='firstname'>{data.firstname}</span>
                    <span className='lastname'>{data.lastname}</span>
                </div>
                <div className='photo-container flex'>
                    <img src={data.photoURL} alt=''></img>
                </div>
                <div className='contact section'>
                    <h2>Contact</h2>
                    <div className='address category'>
                        <h3 className='category-name'>Adress:</h3>
                        <div className='value'>{data.adress}</div>
                    </div>
                    <div className='phone category'>
                        <h3 className='category-name'>Phone:</h3>
                        <div className='value'>{data.phone}</div>
                    </div>
                    <div className='email category'>
                        <h3 className='category-name'>email:</h3>
                        <div className='value'>{data.email}</div>
                    </div>
                    <div className='linkedin category'>
                        <h3 className='category-name'>LinkedIn:</h3>
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