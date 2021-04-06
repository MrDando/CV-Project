import React from 'react'

import SkillForms from './PersonalForm/SkillsForm'
import LanguagesForm from './PersonalForm/LanguagesForm'

function PersonalForm(props) {
    return (
        <div className='form-personal'>
          <div className='form-component-header flex justify-center'>
            <h3>Personal Information</h3>
          </div>
          <div className='contact form-section'>
            <h4 className='accordion' onClick={props.toggleAccordion}>Contact</h4>
            <form className='flex column panel' onSubmit={props.submitForm}>
              <div className ='flex' style={{justifyContent: 'space-between'}}>
                <div className ='flex column contact-row'>
                  <input name='firstname' className='form-input contact-input' placeholder='First name' defaultValue={props.data.firstname} onChange={props.handleChange}></input>
                  <input name='lastname' className='form-input contact-input' placeholder='Last name' defaultValue={props.data.lastname} onChange={props.handleChange}></input>
                  <input name='adress' className='form-input contact-input' placeholder='Adress' defaultValue={props.data.adress} onChange={props.handleChange}></input>
                </div>
                <div className='flex column contact-row'>
                  <input name='phone' className='form-input contact-input' placeholder='Phone' defaultValue={props.data.phone} onChange={props.handleChange}></input>
                  <input name='email' className='form-input contact-input' placeholder='Email' defaultValue={props.data.email} onChange={props.handleChange}></input>
                  <input name='linkedIn' className='form-input contact-input' placeholder='LinkedIn' defaultValue={props.data.linkedIn} onChange={props.handleChange}></input>
                </div>
              </div>
              <div className='flex justify-center'>
                <button className='submit-btn' type='submit'>Submit</button>
              </div>
            </form>
          </div>
          <div>
            <h4 className='accordion' onClick={props.toggleAccordion}>Photo</h4>
            <form className='flex column panel' onSubmit={props.uploadPhoto}>
              <input style={{marginLeft: '50px'}} type='file' accept="image/*"></input>
              <div className='flex column align-center'>
                <button className='submit-btn' type='submit'>Upload Photo</button>
              </div>
            </form>
          </div>
          <div className='skills form-section'>
            <h4 className='accordion' onClick={props.toggleAccordion}>Skills</h4>
            <div className='panel'>
              <SkillForms skills={props.data.skills} 
                        modifySkill={props.modifySkill}/>
              <div className='main-input-div'>
                <form className='flex column align-center' onSubmit={props.addSkill}>
                  <input className='form-input' name='skill' placeholder='Add a new skill'></input>
                  <button className='submit-btn' type='submit'>Add Skill</button>
                </form>
            </div>
          </div>
            </div>       
          <div className='languages form-section'>
            <h4 className='accordion' onClick={props.toggleAccordion}>Languages</h4>
            <div className='panel'>
              <LanguagesForm  addLanguage={props.addLanguage}
                              modifyLanguage={props.modifyLanguage}
                              languages={props.data.languages}/>
            </div>
          </div>
        </div>
    )
}

export default PersonalForm