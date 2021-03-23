import React from 'react'

function Name(props) {
    return (
        <div className='name flex column'>
            <span className='firstname'>{props.firstname}</span>
            <span className='lastname'>{props.lastname}</span>
        </div>
    )
}

export default Name