
import React from 'react'
import uniqid from "uniqid";
import './App.css'

import placeholderImg from './Assets/portrait-placeholder.jpg'

import FormContainer from './Components/Form/FormContainer';
import CVContainer from './Components/CVs/CVContainer'

class App extends React.Component {
  constructor() {
    super()
    this.switchForm = this.switchForm.bind(this)
    this.switchCV = this.switchCV.bind(this)
    this.toggleAccordion = this.toggleAccordion.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addSkill = this.addSkill.bind(this)
    this.modifySkill = this.modifySkill.bind(this)
    this.addLanguage = this.addLanguage.bind(this)
    this.modifyLanguage = this.modifyLanguage.bind(this)
    this.submitSummary = this.submitSummary.bind(this)
    this.submitExperience = this.submitExperience.bind(this)
    this.modifyExperience = this.modifyExperience.bind(this)
    this.submitEducation = this.submitEducation.bind(this)
    this.modifyEducation = this.modifyEducation.bind(this)

    this.colorSchemes = {
      template1: {
        Modern : {
          primary: '#212629',
          secondary: '#474a4f',
          tertiary: '#618930',
          quaternary: '#87c231',
          quinary: '#6a6e71',
        },
        Stylish: {
          primary: '#5d5c61',
          secondary: '#f5f5f5',
          tertiary: '#afa295',
          quaternary: '#5d5c61',
          quinary: '#5d5c61',
        }
      }
    }

    this.state = {
      form: 'personal',
      cvTemplate: 'template1',
      switchButton: 'Education and employment',
      firstname: 'John',
      lastname: 'Doe',
      photoURL: placeholderImg, 
      adress: '7 Greystone St. Wilmington, MA',
      phone: '012-345-6789',
      email: 'example.email@google.com',
      linkedIn: 'www.linkedin.com/in/johndoe/',
      skills: [ {skillName: "Skydiving", key: "kmt59fx5"},
                {skillName: "Javascript", key: "kmt59idp"}],
      languages: [{languageName: "English", proficiency: "Full Professional Proficiency", key: "kmt634di"},
                  {languageName: "German", proficiency: "Elementary Proficiency", key: "kmt636s2"}],
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et pellentesque tortor. 
                In euismod lectus non dictum faucibus. Sed quis augue ullamcorper, imperdiet est nec, lacinia nibh.`,
      experiences: [{position: 'Environmental Consultant',
                      employer: 'Ires Ecology LTD',
                      from: "2016-12-28",
                      fromObj: {
                        day: "28",
                        month: "12",
                        year: "2016"
                      },
                      to: "2021-12-31",
                      toObj: {
                        day: "31",
                        month: "12",
                        year: "2021"
                      },
                      key: "kmt5u9x7",
                      description: "Did some Environmental impact assessments."}],
      educationArr: [{degree: "Master in Geological Engineering",
                      description: "Studied environmental geology.",
                      from: "2013-09-28",
                      fromObj: {day: "28",
                                month: "09",
                                year: "2013"},
                      institution: "University of Zagreb",
                      key: "kmt6a521",
                      to: "2015-11-18",
                      toObj: {day: "18",
                              month: "11",
                              year: "2015"
                      }
                    }]
    }
  }

  switchForm() {
    this.setState(prevState => {
      if (prevState.form === 'personal') {
        return {form: 'professional',
                switchButton: 'Personal information'}
      } else {
        return {form: 'personal',
                switchButton: 'Education and employment'}
      }
    })
  }

  switchCV(e) {
    const i = e.target.value

    const template = `template${i}`

    this.setState({cvTemplate: template})
  }

  toggleAccordion(e) {
    const element = e.target
    element.classList.toggle('active')

    const panel = element.nextElementSibling
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
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
      month: this.convertMonth(dateArr[1]),
      day: dateArr[2]
    }
    return dateObj
  }

  convertMonth(monthNumber) {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return monthNames[monthNumber-1]
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

  submitEducation(e) {
    e.preventDefault()
    const container = e.target
    const institution = container.querySelector('.institution').value
    container.querySelector('.institution').value = ''
    const degree = container.querySelector('.degree').value
    container.querySelector('.degree').value = ''
    const from = container.querySelector('.education-from').value
    container.querySelector('.education-from').value = ''
    const fromObj = this.dateToObject(from)
    const to = container.querySelector('.education-to').value
    container.querySelector('.education-to').value = ''
    const toObj = this.dateToObject(to)
    const description = container.querySelector('.education-description').value
    container.querySelector('.education-description').value = ''
    const id = uniqid()
    
    const education = {
      degree: degree,
      institution: institution,
      from: from,
      fromObj: fromObj,
      to: to,
      toObj: toObj,
      description: description,
      key: id
    }
    this.setState({
      educationArr: this.state.educationArr.concat(education),
    });
  }

  modifyEducation(e) {
    e.preventDefault()
    const container = e.target.parentElement.parentElement
    const type = e.target.innerText;
    const institution = container.querySelector('.institution').value
    const degree = container.querySelector('.degree').value
    const from = container.querySelector('.from').value
    const fromObj = this.dateToObject(from)
    const to = container.querySelector('.to').value
    const toObj = this.dateToObject(to)
    const description = container.querySelector('.description').value
    const key = e.target.id

    const updatedEducation = {
      institution: institution,
      degree: degree,
      from: from,
      fromObj: fromObj,
      to: to,
      toObj: toObj,
      description: description,
      key: key
    }

    this.setState(prevState => {
      let updatedState = []
      prevState.educationArr.forEach(education => {
        if (e.target.id === education.key) {
          if (type === 'Edit') {
            updatedState.push(updatedEducation)
          } 
          } else {
            updatedState.push(education)
        }
      })
      return {educationArr: updatedState}
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <header className='flex justify-center align-center'>
          <div className='webpage-title'>
            <h1>CV Creator</h1>
          </div>
          <div className='select-container'>
            <p>CV Template</p>
            <select className='cv-select' onChange={this.switchCV}>
                    <option value="1">Template1</option>
                    <option value="2">Template2</option>
            </select>
          </div>
        </header>
        <main className='flex justify-center scale-down'>
          <div className='cv-form'>
            <div className='flex cv-form-header justify-center align-center'>
              <h2 className='cv-form-title'>Input Form</h2>
              <button className='toggle-form-btn' onClick={this.switchForm}>{this.state.switchButton}</button>
            </div>
            <FormContainer  data={this.state}
                            toggleAccordion={this.toggleAccordion} 
                            submitForm={this.submitForm} 
                            handleChange={this.handleChange} 
                            addSkill={this.addSkill} 
                            modifySkill={this.modifySkill} 
                            addLanguage={this.addLanguage} 
                            modifyLanguage={this.modifyLanguage}
                            submitSummary={this.submitSummary}
                            submitExperience={this.submitExperience}
                            modifyExperience={this.modifyExperience}
                            submitEducation={this.submitEducation}
                            modifyEducation={this.modifyEducation}/>
          </div>      
          <div>
            <CVContainer data={this.state} />
          </div>
        </main>
      </div>
      
    );
  }
}

export default App;
