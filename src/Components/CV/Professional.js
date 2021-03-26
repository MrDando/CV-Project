import React from 'react'

function Summary(props) {
    return (
        <div>
            <h2>Summary</h2>
            <p>{props.summary}</p>
        </div>
    )
}

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
    console.log(props)
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

function Professional(props) {
    return(
        <div className='professional flex column'>
            <Summary summary={props.data.summary}/>
            <Experience experiences={props.data.experiences}/>
            <Education educationArr={props.data.educationArr}/>
        </div>
    )
}

export default Professional