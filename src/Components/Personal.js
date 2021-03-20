import React from 'react'

function Personal() {
    return (
        <div className='personal flex column'>
            <div className='fullname flex column'>
                <span className='firstname'>First Name</span>
                <span className='lastname'>Last Name</span>
            </div>
            <div className='photo-container'>
                <img src='#' alt='placeholder'></img>
            </div>
            <div className='contact'>
                <h2>Contact</h2>
                <div className='address'>
                    <div className='category-name'>Adress:</div>
                    <div className='value'>Placeholder</div>
                </div>
                <div className='phone'>
                    <div className='category-name'>Phone:</div>
                    <div className='value'>Placeholder</div>
                </div>
                <div className='email'>
                    <div className='category-name'>email:</div>
                    <div className='value'>Placeholder</div>
                </div>
                <div className='linkedin'>
                    <div className='category-name'>LinkedIn:</div>
                    <div className='value'>Placeholder</div>
                </div>
            </div>
            <div className='skills'>
                <h2>Skills</h2>
                <div className='list'>
                    <ul>
                        <li>Skill 1</li>
                        <li>Skill 2</li>
                        <li>Skill 3</li>
                    </ul>
                </div>
            </div>
            <div className='languages'>
                <h2>Languages</h2>
                <div id='languages-list'>
                    <div class='language-container'>
                        <span className='language-name'>English</span><span className='language-proficiency'>Proficient</span>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Personal