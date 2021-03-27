import React from 'react'

import ExperienceFormList from './ProfessionalForm/ExperienceFormList'
import EducationFormList from './ProfessionalForm/EducationFormList'

function ProfessionalForm(props) {
    console.log(props)
    return (
        <div className='form-professional'>
            <div className='form-component-header flex justify-center'>
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
                <ExperienceFormList experiences={props.data.experiences} modifyExperience={props.modifyExperience}/>
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
                <EducationFormList educationArr={props.data.educationArr} modifyEducation={props.modifyEducation}/>
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