import React from 'react'

function LanguagesForm(props) {
    return (
        <div>
          <div>
              {props.languages.map(language => {
                  return  <div className='form-row' key={language.key}>
                              <input className='mini-input language-name' id={language.key} defaultValue={language.languageName}></input>
                              <select className='mini-input language-proficiency' name="language-proficiency" id="language-proficiency" defaultValue={language.proficiency}>
                                  <option value="Elementary Proficiency">Elementary Proficiency</option>
                                  <option value="Limited Working Proficiency">Limited Working Proficiency</option>
                                  <option value="Professional Working Proficiency">Professional Working Proficiency</option>
                                  <option value="Full Professional Proficiency">Full Professional Proficiency</option>
                                  <option value="Native / Bilingual Proficiency">Native / Bilingual Proficiency</option>
                              </select>
                              <button className='edit-btn' onClick={props.modifyLanguage} id={language.key}>Edit</button>
                              <button className='delete-btn' onClick={props.modifyLanguage} id={language.key}>Delete</button>
                          </div>
              })}
          </div>
          <div className='main-input-div'>
            <form onSubmit={props.addLanguage}>
              <div className='flex' style={{justifyContent: 'space-evenly'}}>
                <div className='flex column'>
                  <label>Language</label>
                  <input className='form-input' placeholder='Add a new language'></input>
                </div>
                <div className='flex column'>
                  <label htmlFor='language-proficiency'>Proficiency</label>
                  <select className='form-input' name="language-proficiency" id="language-proficiency">
                    <option value="Elementary Proficiency">Elementary Proficiency</option>
                    <option value="Limited Working Proficiency">Limited Working Proficiency</option>
                    <option value="Professional Working Proficiency">Professional Working Proficiency</option>
                    <option value="Full Professional Proficiency">Full Professional Proficiency</option>
                    <option value="Native / Bilingual Proficiency">Native / Bilingual Proficiency</option>
                  </select>
                </div>
              </div>
              <div className='flex justify-center'>
                <button className='submit-btn' type='submit'>Add Language</button>
              </div>
            </form>
          </div>
        </div>
    )
}

export default LanguagesForm