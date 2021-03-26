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

function Education() {
    return(
        <div>
            <h2>Education</h2>
            <div className='education-container'>
                <div className='flex'>
                    <h3 className='organization-name'>University Name</h3>
                    <span className='timespan'>From 1997 to 2019</span>
                </div>
                <span className='degree'>Degree Description</span>
            </div>
        </div>
    )
}

function Professional(props) {
    return(
        <div className='professional flex column'>
            <Summary summary={props.data.summary}/>
            <Experience experiences={props.data.experiences}/>
            <Education />
        </div>
    )
}

export default Professional