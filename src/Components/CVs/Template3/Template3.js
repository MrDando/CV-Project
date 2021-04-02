import React from 'react'
import './Template3.css'


function Skills(props) {
    return (
        <div>
                    {props.skills.map(skill => {
                        return <div key={skill.key} className='item'>{skill.skillName}</div>
                    })}
        </div>
    )
}

function Languages(props) {
    return (
        <div>
                {props.languages.map(language => {
                    return  <div key={language.key} className='item'>
                                <div>{language.languageName}</div>
                                <div>({language.proficiency})</div>
                            </div>
                })}
        </div>
    )
}

function Experience(props) {
    return(
        <div>
            {props.experiences.map(experience => {
                return  <div key={experience.key} className='item'>
                            <h3 className='position'>{experience.position}</h3>
                            <div className='flex align-center job-intro'>
                                <h3>{experience.employer}</h3>
                                <p style={{marginLeft: '10px'}}>{experience.fromObj.year} - {experience.toObj.year}</p>
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
             {props.educationArr.map(education => {
                return  <div key={education.key} className='item'>
                            <h3 className='degree'>{education.degree}</h3>
                            <h3 className='institution'>{education.institution}</h3>
                            <span>{education.fromObj.year} - {education.toObj.year}</span>
                        </div>
            })}
        </div>
    )
}

function Template1(props) {
    const data = props.data
    return (
        <div className='cv template3 flex column wrapper'>
            <div className='title'>
                <p className='name'>{data.firstname.toUpperCase()} {data.lastname.toUpperCase()}</p>
                <p className='profession'>{data.profession.toUpperCase()}</p>
            </div>
            <div className='flex main-container'>
                <div className='left'>
                    <div className='contact section'>
                        <h2>CONTACT</h2>
                        <div>
                            <p>{data.adress}</p>
                            <p>{data.phone}</p>
                            <p>{data.email}</p>
                            <p>{data.linkedIn}</p>
                        </div>
                    </div>
                    <div className='education section'>
                        <h2>EDUCATION</h2>
                        <Education educationArr={data.educationArr}/>
                    </div>
                    <div className='skills section'>
                        <h2>SKILLS</h2>
                        <Skills skills={data.skills} />
                    </div>
                    <div className='languages section'>
                        <h2>LANGUAGES</h2>
                        <Languages languages={data.languages} />
                    </div>
                </div>
                <div className='right'>
                    <div className='section'>
                        <h2>SUMMARY</h2>
                        <p className='summary'>{data.summary}</p>
                    </div>
                    <div>
                        <h2>EXPERIENCE</h2>
                        <Experience experiences={data.experiences} />
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Template1

/*
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
*/