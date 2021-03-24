import React from 'react'

function LanguagesForm(props) {
    return (
        <div className='languages form-section'>
            <h2>Languages</h2>
            <div>
              <form className='flex'>
                <div className='flex column'>
                  <label>Language</label>
                  <input></input>
                </div>
                <div className='flex column'>
                  <label for='language-proficiency'>Proficiency</label>
                  <select name="language-proficiency" id="language-proficiency">
                    <option value="elementary">Elementary Proficiency</option>
                    <option value="limited-working">Limited Working Proficiency</option>
                    <option value="professional-working">Professional Working Proficiency</option>
                    <option value="full-professional">Full Professional Proficiency</option>
                    <option value="native-bilingual">Native / Bilingual Proficiency</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
    )
}

export default LanguagesForm