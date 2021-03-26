import React from 'react'

function ExperienceForm(props) {
    return (
        <div>
            {props.experiences.map(experience => {
                return  <div key={experience.key} className='flex column'>
                            <div className='flex'>
                                <div className='flex column'>
                                    <label htmlFor='position'>Position</label>
                                    <input className='position' name='position' type='text' defaultValue={experience.position}></input>
                                    <label htmlFor='employer'>Organization</label>
                                    <input className='employer' name='employer' type='text' defaultValue={experience.employer}></input>
                                </div>
                                <div className='flex column'>
                                    <div className='flex'>
                                        <label>From</label>
                                        <input type='date' className='from' defaultValue={experience.from}></input>
                                    </div>
                                    <div className='flex'>
                                        <label>To</label>
                                        <input type='date' className='to' defaultValue={experience.to}></input>
                                    </div>
                                </div>
                            </div>
                            <textarea className='description' defaultValue={experience.description}></textarea>
                            <div className='flex justify-center'>
                                <button id={experience.key} onClick={props.modifyExperience}>Edit</button>
                                <button id={experience.key} onClick={props.modifyExperience}>Delete</button>
                            </div>
                        </div>
            })}
        </div>
    )
}

function EducationForm(props) {

}

function ProfessionalForm(props) {
    return (
        <div className='form-professional'>
            <div className='form-section-header'>
                <h3>Professional Information</h3>
            </div>
            <div className='form-section'>
                <h4>Summary</h4>
                <form className='flex column' onSubmit={props.submitSummary}>
                    <textarea name="summary" cols="40" rows="5"></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <div className='form-section'>
                <h4>Experience</h4>
                <ExperienceForm experiences={props.data.experiences} modifyExperience={props.modifyExperience}/>
                <div className='experience-form'>
                    <form className='flex column' onSubmit={props.submitExperience}>
                        <input className='position' type='text' placeholder='Position'></input>
                        <input className='employer' type='text' placeholder='Organization'></input>
                        <div>
                            <input className='employment-from' type='date'></input>
                            <input className='employment-to' type='date'></input>
                        </div>
                        <div className='flex column'>
                            <label htmlFor='employment-description'>Job Description</label>
                            <textarea className='employment-description' name="employment-description" cols="40" rows="5"></textarea>
                        </div>
                        <button type='submit'>Add Experience</button>
                    </form>    
                </div>
            </div>
            <div className='form-section'>
                <h4>Education</h4>
                <div className='education-form'>
                    <form className='flex column' onSubmit={props.submitEducation}>
                        <input className='institution' placeholder='Institution'></input>
                        <input className='degree' placeholder='Degree'></input>
                        <div className='flex'>
                            <div className='flex column'>
                                <label htmlFor='education-from'>From:</label>
                                <input className='education-from' name='education-from' type='date'></input>
                            </div>
                            <div className='flex column'>
                                <label htmlFor='education-to'>To:</label>
                                <input className='education-to' name='education-to' type='date'></input>
                            </div>
                        </div>
                        <div className='flex column'>
                            <label htmlFor='education-description'>Education Notes</label>
                            <textarea className='education-description' name="education-description" cols="40" rows="3"></textarea>
                        </div>
                        <button type='submit'>Add Education</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalForm