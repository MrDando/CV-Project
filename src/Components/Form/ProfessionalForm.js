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
                <h4 className='accordion' onClick={props.toggleAccordion}>Summary</h4>
                <div className='panel'>
                    <form className='flex column align-center' onSubmit={props.submitSummary}>
                        <textarea name="summary" cols="50" rows="4" style={{marginTop: '10px'}}></textarea>
                        <div className='flex justify-center'>
                            <button className='submit-btn' type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='form-section'>
                <h4 className='accordion' onClick={props.toggleAccordion}>Experience</h4>
                <div className='panel'>
                    <ExperienceFormList experiences={props.data.experiences} modifyExperience={props.modifyExperience}/>
                    <div className='main-input-div'>
                        <form className='flex column' onSubmit={props.submitExperience}>
                            <div className='flex' style={{justifyContent: 'space-evenly'}}>
                                <div className='flex column align-center'>
                                    <input className='position form-input' type='text' placeholder='Position'></input>
                                    <label>From:</label>
                                    <input className='employment-from date' type='date'></input>
                                </div>
                                <div className='flex column align-center'>
                                    <input className='employer form-input' type='text' placeholder='Organization'></input>
                                    <label>To:</label>
                                    <input className='employment-to date' type='date'></input>
                                </div>
                            </div>
                            <div className='flex column align-center'>
                                <label>Job Description</label>
                                <textarea className='employment-description' cols="40" rows="4"></textarea>
                            </div>
                            <div className='flex justify-center'>
                                <button className='submit-btn' type='submit'>Add Experience</button>
                            </div>
                        </form>    
                    </div>
                </div>
            </div>
            <div className='form-section'>
                <h4 className='accordion' onClick={props.toggleAccordion}>Education</h4>
                <div className='panel'>
                    <EducationFormList educationArr={props.data.educationArr} modifyEducation={props.modifyEducation}/>
                    <div className='main-input-div'>
                        <form className='flex column' onSubmit={props.submitEducation}>
                            <div className='flex' style={{justifyContent: 'space-evenly'}}>
                                <div className='flex column align-center'>
                                    <input className='institution form-input' placeholder='Institution'></input>
                                    <label htmlFor='education-from'>From:</label>
                                    <input className='education-from' name='education-from' type='date'></input>
                                </div>
                                <div className='flex column align-center'>
                                    <input className='degree form-input' placeholder='Degree'></input>
                                    <label htmlFor='education-to'>To:</label>
                                    <input className='education-to' name='education-to' type='date'></input>
                                </div>
                            </div>
                            <div className='flex column align-center'>
                                <label>Education Notes</label>
                                <textarea className='education-description' cols="40" rows="3"></textarea>
                            </div>
                            <div className='flex justify-center'>
                                <button className='submit-btn' type='submit'>Add Education</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalForm