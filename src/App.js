
import React from 'react'
import uniqid from "uniqid";

import Form from './Components/Form'
import Personal from './Components/CV/Personal'
import Professional from './Components/CV/Professional'

class App extends React.Component {
  constructor() {
    super()
    this.submitForm = this.submitForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addSkill = this.addSkill.bind(this)
    this.editSkill = this.editSkill.bind(this)
    this.deleteSkill = this.deleteSkill.bind(this)

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
    if (skillName) {
      const id =  uniqid()
      const skill = {
        skillName: skillName,
        key: id
      }
      e.target.querySelector('input').value = ''
      this.setState({
        skills: this.state.skills.concat(skill),
      });
    }
  }

  editSkill(e) {
    const newVal = e.target.previousElementSibling.value;
    this.setState(prevState => {
      let updatedState = []
      prevState.skills.forEach(skill => {
        if (e.target.id !== skill.key) {
          updatedState.push(skill)
        } else {
          skill.skillName = newVal
          updatedState.push(skill)
        }
      }
      )
      return {skills: updatedState}
    })
  }

  deleteSkill(e) {
    this.setState(prevState => {
      let updatedState = []
      prevState.skills.forEach(skill => {
        if (e.target.id !== skill.key) {
          updatedState.push(skill)
        }
      }
      )
      return {skills: updatedState}
    })
  }

  render() {
    return (

      <div className='flex justify-center scale-down'>
        <Form submitForm={this.submitForm} 
              handleChange={this.handleChange} 
              addSkill={this.addSkill}
              editSkill={this.editSkill}
              deleteSkill={this.deleteSkill}
              skills={this.state.skills}/>
        <div className='cv flex'>
          <Personal data={this.state}/>
          <Professional />
        </div>
      </div>
      
    );
  }
}

export default App;
