
import React from 'react'

import Personal from './Components/Personal'
import Professional from './Components/Professional'

class App extends React.Component {
  constructor() {
    super()
    this.addEntry = this.addEntry.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      firstname: 'John',
      lastname: 'Doe',
      adress: '',
      phone: '',
      email: '',
      linkedIn: ''
    }
  }

  addEntry(e) {
    e.preventDefault();
  }

  handleChange(e) {
    console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className='flex justify-center scale-down'>
        <div className='cv-form'>
          <div className='form-section'>
            <h2>Personal information</h2>
            <form className='flex column' onSubmit={this.addEntry}>
              <input name='firstname' className='personal-input' placeholder='First name' onChange={this.handleChange}></input>
              <input name='lastname' className='personal-input' placeholder='Last name' onChange={this.handleChange}></input>
              <input name='adress' className='personal-input' placeholder='Adress' onChange={this.handleChange}></input>
              <input name='phone' className='personal-input' placeholder='Phone' onChange={this.handleChange}></input>
              <input name='email' className='personal-input' placeholder='Email' onChange={this.handleChange}></input>
              <input name='linkedIn' className='personal-input' placeholder='LinkedIn' onChange={this.handleChange}></input>
            </form>
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
