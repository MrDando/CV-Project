import React from 'react'

function Contact(props) {
    return (
        <div className='contact section'>
            <h2>Contact</h2>
            <div className='address category'>
                <div className='category-name'>Adress:</div>
                <div className='value'>{props.adress}</div>
            </div>
            <div className='phone category'>
                <div className='category-name'>Phone:</div>
                <div className='value'>{props.phone}</div>
            </div>
            <div className='email category'>
                <div className='category-name'>email:</div>
                <div className='value'>{props.email}</div>
            </div>
            <div className='linkedin category'>
                <div className='category-name'>LinkedIn:</div>
                <div className='value'>{props.linkedIn}</div>
            </div>
        </div>
    )
}

export default Contact