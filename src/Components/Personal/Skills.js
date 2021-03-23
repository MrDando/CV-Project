import React from 'react'

function Skills(props) {
    console.log('props', props)
    return (
        <div className='skills section'>
            <h2>Skills</h2>
            <div className='list'>
                <ul>
                    {props.skills.map(skill => {
                        return <li key={skill.key}>{skill.skillName}</li>
                    })}
                </ul>

                
            </div>
        </div>
)
}

export default Skills

/* <ul>
      {tasks.map((task) => {
        return <li key={uniqid()}>{task}</li>;
      })}
    </ul> */