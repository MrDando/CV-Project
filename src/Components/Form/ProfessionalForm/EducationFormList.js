function EducationForm(props) {
    return (
        <div>
            {props.educationArr.map(education => {
                return  <div key={education.key} className='flex column'>
                            <div className='flex'>
                                <div className='flex column'>
                                    <label htmlFor='institution'>Institution</label>
                                    <input className='institution' name='institution' type='text' defaultValue={education.institution}></input>
                                    <label htmlFor='degree'>Degree</label>
                                    <input className='degree' name='degree' type='text' defaultValue={education.degree}></input>
                                </div>
                                <div className='flex column'>
                                    <div className='flex'>
                                        <label>From</label>
                                        <input type='date' className='from' defaultValue={education.from}></input>
                                    </div>
                                    <div className='flex'>
                                        <label>To</label>
                                        <input type='date' className='to' defaultValue={education.to}></input>
                                    </div>
                                </div>
                            </div>
                            <textarea className='description' defaultValue={education.description}></textarea>
                            <div className='flex'>
                                <button id={education.key} onClick={props.modifyEducation}>Edit</button>
                                <button id={education.key} onClick={props.modifyEducation}>Delete</button>
                            </div>
                        </div>
            })}
        </div>
    )
}

export default EducationForm