
import React from 'react'

import Personal from './Components/Personal'
import Professional from './Components/Professional'

class App extends React.Component {
  constructor() {
    super()
    this.submitForm = this.submitForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addSkill = this.addSkill.bind(this)

    this.personal = {
      firstname: '',
      lastname: ''
    }

    this.state = {
      firstname: 'John',
      lastname: 'Doe',
      adress: '',
      phone: '',
      email: '',
      linkedIn: '',
      skills: []
    }
  }

  submitForm(e) {
    console.log('Form Submitted', this.personal)
    e.preventDefault();

    const {firstname, lastname, adress, phone, email, linkedIn} = this.personal
    this.setState({
      firstname: firstname,
      lastname: lastname,
      adress: adress,
      phone: phone,
      email: email,
      linkedIn: linkedIn,
    })
  }

  handleChange(e) {
    this.personal[e.target.name] = e.target.value
  }

  addSkill(e) {
    e.preventDefault();
    const skillName = e.target.querySelector('input').value;
    const id = this.state.skills.length
    const skill = {
      skillName: skillName,
      key: id
    }
    e.target.querySelector('input').value = ''
    this.setState({
      skills: this.state.skills.concat(skill),
    });
  }

  render() {
    return (
      <div className='flex justify-center scale-down'>
        <div className='cv-form'>
          <div className='form-section'>
            <h2>Personal information</h2>
            <form className='flex column' onSubmit={this.submitForm}>
              <div className ='flex justified-center'>
                <div className ='flex column' style={{flex: 1}}>
                  <input name='firstname' className='personal-input' placeholder='First name' onChange={this.handleChange}></input>
                  <input name='lastname' className='personal-input' placeholder='Last name' onChange={this.handleChange}></input>
                  <input name='adress' className='personal-input' placeholder='Adress' onChange={this.handleChange}></input>
                </div>
                <div className='flex column' style={{flex: 1}}>
                  <input name='phone' className='personal-input' placeholder='Phone' onChange={this.handleChange}></input>
                  <input name='email' className='personal-input' placeholder='Email' onChange={this.handleChange}></input>
                  <input name='linkedIn' className='personal-input' placeholder='LinkedIn' onChange={this.handleChange}></input>
                </div>
              </div>
              <button type='submit'>Submit</button>
            </form>
          </div>
          <div className='skills form-section'>
            <h2>Skills</h2>
            <div className=''>
              <form onSubmit={this.addSkill}>
                <input name='skill'></input>
                <button type='submit'>Add Skill</button>
              </form>
            </div>
           

          </div>
  
        </div>
        <div className='cv flex'>
          <Personal data={this.state}/>
          <Professional />
        </div>
      </div>
      
    );
  }
}

export default App;
