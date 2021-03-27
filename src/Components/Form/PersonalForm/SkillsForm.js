import React from 'react'

function SkillForms(props) {
    return (
        <div>
            {props.skills.map(skill => {
                return  <div key={skill.key} className='flex align-center form-row'>
                            <input className='mini-input' id={skill.key} defaultValue={skill.skillName}></input>
                            <button className='edit-btn' onClick={props.modifySkill} id={skill.key}>Edit</button>
                            <button className='delete-btn' onClick={props.modifySkill} id={skill.key}>Delete</button>
                        </div>
            })}
        </div>
    )
}

export default SkillForms