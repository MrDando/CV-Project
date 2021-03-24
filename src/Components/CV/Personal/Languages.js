import React from 'react'

function Languages(props) {
    return (
        <div className='languages section'>
            <h2>Languages</h2>
            <div id='languages-list'>
                {props.languages.map(language => {
                    return  <div key={language.key} className='language'>
                                <div className='name'>{language.languageName}</div>
                                <div className='proficiency'>{language.proficiency}</div>
                            </div>
                })}
            </div>
        </div>
    )
}

export default Languages