import React from 'react'

function Summary(props) {
    return (
        <div>
            <h2>Summary</h2>
            <p>{props.summary}</p>
        </div>
    )
}

function Experience() {
    return(
        <div>
            <h2>Experience</h2>
            <div className='job-container'>
                <div className='flex'>
                    <h3 className='organization-name'>Company name</h3>
                    <span className='timespan'>From 1997 to 2019</span>
                </div>
                <span className='job-description'>Job description</span>
                <ul className='job-responsibilities'>
                    <li>One</li>
                    <li>Two</li>
                </ul>
            </div>
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
    console.log(props)
    return(
        <div className='professional flex column'>
            <Summary summary={props.data.summary}/>
            <Experience />
            <Education />
        </div>
    )
}

export default Professional