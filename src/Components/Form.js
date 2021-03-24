import React from 'react'

function SkillsForm(props) {
  return(
    <div>
      {props.skills.map(skill => {
        return  <div key={skill.key} className='flex'>
                  <input className='display-input' id={skill.key} defaultValue={skill.skillName}></input>
                  <button onClick={props.editSkill} id={skill.key}>Edit</button>
                  <button onClick={props.deleteSkill} id={skill.key}>Delete</button>
                </div>
      })}
    </div>
  )
}

function Form(props) {
    return(
        <div className='cv-form'>
          <div className='form-section'>
            <h2>Personal information</h2>
            <form className='flex column' onSubmit={props.submitForm}>
              <div className ='flex justified-center'>
                <div className ='flex column' style={{flex: 1}}>
                  <input name='firstname' className='personal-input' placeholder='First name' onChange={props.handleChange}></input>
                  <input name='lastname' className='personal-input' placeholder='Last name' onChange={props.handleChange}></input>
                  <input name='adress' className='personal-input' placeholder='Adress' onChange={props.handleChange}></input>
                </div>
                <div className='flex column' style={{flex: 1}}>
                  <input name='phone' className='personal-input' placeholder='Phone' onChange={props.handleChange}></input>
                  <input name='email' className='personal-input' placeholder='Email' onChange={props.handleChange}></input>
                  <input name='linkedIn' className='personal-input' placeholder='LinkedIn' onChange={props.handleChange}></input>
                </div>
              </div>
              <button type='submit'>Submit</button>
            </form>
          </div>
          <div className='skills form-section'>
            <h2>Skills</h2>
            <SkillsForm skills={props.skills} editSkill={props.editSkill} deleteSkill={props.deleteSkill}/>
            <div className=''>
              <form onSubmit={props.addSkill}>
                <input name='skill'></input>
                <button type='submit'>Add Skill</button>
              </form>
            </div>
          </div>
        </div>
    )
}

export default Form