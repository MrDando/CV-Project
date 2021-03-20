import React from 'react'
import './personal.css'

function Personal() {
    return (
        <div className='personal flex column'>
            <div className='name flex column'>
                <span className='firstname'>First Name</span>
                <span className='lastname'>Last Name</span>
            </div>
            <div className='photo-container'>
                <img src='#' alt=''></img>
            </div>
            <div className='contact section'>
                <h2>Contact</h2>
                <div className='address category'>
                    <div className='category-name'>Adress:</div>
                    <div className='value'>Placeholder</div>
                </div>
                <div className='phone category'>
                    <div className='category-name'>Phone:</div>
                    <div className='value'>Placeholder</div>
                </div>
                <div className='email category'>
                    <div className='category-name'>email:</div>
                    <div className='value'>Placeholder</div>
                </div>
                <div className='linkedin category'>
                    <div className='category-name'>LinkedIn:</div>
                    <div className='value'>Placeholder</div>
                </div>
            </div>
            <div className='skills section'>
                <h2>Skills</h2>
                <div className='list'>
                    <ul>
                        <li>Skill 1</li>
                        <li>Skill 2</li>
                        <li>Skill 3</li>
                    </ul>
                </div>
            </div>
            <div className='languages section'>
                <h2>Languages</h2>
                <div id='languages-list'>
                    <div class='language-container'>
                        <div className='name'>English</div>
                        <div className='proficiency'>(Limited working proficiency)</div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Personal