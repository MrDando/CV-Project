import React from 'react'

function LanguagesForm(props) {
    return (
        <div className='languages form-section'>
            <h2>Languages</h2>
            <div>
              <form onSubmit={props.addLanguage}>
                <div className='flex'>
                <div className='flex column'>
                  <label>Language</label>
                  <input></input>
                </div>
                <div className='flex column'>
                  <label htmlFor='language-proficiency'>Proficiency</label>
                  <select name="language-proficiency" id="language-proficiency">
                    <option value="Elementary Proficiency">Elementary Proficiency</option>
                    <option value="Limited Working Proficiency">Limited Working Proficiency</option>
                    <option value="Professional Working Proficiency">Professional Working Proficiency</option>
                    <option value="Full Professional Proficiency">Full Professional Proficiency</option>
                    <option value="Native / Bilingual Proficiency">Native / Bilingual Proficiency</option>
                  </select>
                </div>
                </div>
                <button type='submit'>Submit</button>
              </form>
            </div>
          </div>
    )
}

export default LanguagesForm