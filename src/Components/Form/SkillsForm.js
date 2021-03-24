import React from 'react'

function SkillForms(props) {
    return (
        <div>
            {props.skills.map(skill => {
                return  <div key={skill.key} className='flex'>
                            <input className='display-input' id={skill.key} defaultValue={skill.skillName}></input>
                            <button onClick={props.modifySkill} id={skill.key}>Edit</button>
                            <button onClick={props.modifySkill} id={skill.key}>Delete</button>
                        </div>
            })}
        </div>
    )
}

export default SkillForms