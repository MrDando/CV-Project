import React from 'react'

function ProfessionalForm(props) {
    return (
        <div className='form-professional'>
            <div className='form-section'>
                <h2>Summary</h2>
                <form className='flex column' onSubmit={props.submitSummary}>
                    <textarea name="summary" cols="40" rows="5"></textarea>
                    <button type='submit'>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default ProfessionalForm