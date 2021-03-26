
import React from 'react'
import uniqid from "uniqid";

import PersonalForm from './Components/Form/PersonalForm'
import ProfessionalForm from './Components/Form/ProfessionalForm'
import Personal from './Components/CV/Personal'
import Professional from './Components/CV/Professional'

class App extends React.Component {
  constructor() {
    super()
    this.submitForm = this.submitForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addSkill = this.addSkill.bind(this)
    this.modifySkill = this.modifySkill.bind(this)
    this.addLanguage = this.addLanguage.bind(this)
    this.modifyLanguage = this.modifyLanguage.bind(this)
    this.submitSummary = this.submitSummary.bind(this)
    this.submitExperience = this.submitExperience.bind(this)
    this.modifyExperience = this.modifyExperience.bind(this)

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
      skills: [],
      languages: [],
      summary: '',
      experiences: [],
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

  modifySkill(e) {
    const type = e.target.innerText;
    const newVal = e.target.previousElementSibling.value;
    
    this.setState(prevState => {
      let updatedState = []
      prevState.skills.forEach(skill => {
        if (e.target.id === skill.key) {
          if (type === 'Edit') {
            skill.skillName = newVal
            updatedState.push(skill)
          }
        } else {
          updatedState.push(skill)
        }
      })
      return {skills: updatedState}
    })
  }

  addLanguage(e) {
    e.preventDefault()
    const languageName = e.target.querySelector('input').value;
    const proficiency = e.target.querySelector('select').value;
    
    const id = uniqid()
    const language = {
      languageName: languageName,
      proficiency: proficiency,
      key: id
    }

    e.target.querySelector('input').value = ''
    this.setState({
      languages: this.state.languages.concat(language),
    });
  }

  modifyLanguage(e) {
    const type = e.target.innerText;
    const name = e.target.previousElementSibling.previousElementSibling.value
    const proficiency = e.target.previousElementSibling.value
    
    this.setState(prevState => {
      let updatedState = []
      prevState.languages.forEach(language => {
        if (e.target.id === language.key) {
          if (type === 'Edit') {
            language.languageName = name
            language.proficiency = proficiency
            updatedState.push(language)
          }
        } else {
          updatedState.push(language)
        }
      })
      return {languages: updatedState}
    })
  }

  submitSummary(e) {
    e.preventDefault()
    const newSummary = e.target.querySelector('textarea').value

    this.setState({summary: newSummary})
  }

  dateToObject(date) {
    const dateArr = date.split('-')
    const dateObj = {
      year: dateArr[0],
      month: dateArr[1],
      day: dateArr[2]
    }
    return dateObj
  }

  submitExperience(e) {
    e.preventDefault()
    const position = e.target.querySelector('.position').value
    e.target.querySelector('.position').value = ''
    const employer = e.target.querySelector('.employer').value
    e.target.querySelector('.employer').value = ''
    const from = e.target.querySelector('.employment-from').value
    const fromObj = this.dateToObject(from)
    e.target.querySelector('.employment-from').value = ''
    const to = e.target.querySelector('.employment-to').value
    const toObj = this.dateToObject(to)
    e.target.querySelector('.employment-to').value = ''
    const description = e.target.querySelector('.employment-description').value
    e.target.querySelector('.employment-description').value = ''
    const id = uniqid()

    const employment = {
      position: position,
      employer: employer,
      from: from,
      fromObj: fromObj,
      to: to,
      toObj: toObj,
      description: description,
      key: id
    }
    this.setState({
      experiences: this.state.experiences.concat(employment),
    });
  }

  modifyExperience(e) {
    const container = e.target.parentElement.parentElement
    const type = e.target.innerText;
    const position = container.querySelector('.position').value
    const employer = container.querySelector('.employer').value
    const from = container.querySelector('.from').value
    const fromObj = this.dateToObject(from)
    const to = container.querySelector('.to').value
    const toObj = this.dateToObject(to)
    const description = container.querySelector('.description').value
    const key = e.target.id

    const updatedExperience = {
      position: position,
      employer: employer,
      from: from,
      fromObj: fromObj,
      to: to,
      toObj: toObj,
      description: description,
      key: key
    }
    
    this.setState(prevState => {
      let updatedState = []
      prevState.experiences.forEach(experience => {
        if (e.target.id === experience.key) {
          if (type === 'Edit') {
            updatedState.push(updatedExperience)
          } 
          } else {
            updatedState.push(experience)
        }
      })
      return {experiences: updatedState}
    })
  }

  render() {
    return (

      <div className='flex justify-center scale-down'>
        <div className='cv-form'>
          <PersonalForm data={this.state} 
                        submitForm={this.submitForm} 
                        handleChange={this.handleChange} 
                        addSkill={this.addSkill} 
                        modifySkill={this.modifySkill} 
                        addLanguage={this.addLanguage} 
                        modifyLanguage={this.modifyLanguage}/>
          <ProfessionalForm data={this.state} 
                            submitSummary={this.submitSummary}
                            submitExperience={this.submitExperience}
                            modifyExperience={this.modifyExperience}/>
        </div>      
        <div className='cv flex'>
          <Personal data={this.state}/>
          <Professional data={this.state}/>
        </div>
      </div>
      
    );
  }
}

export default App;
