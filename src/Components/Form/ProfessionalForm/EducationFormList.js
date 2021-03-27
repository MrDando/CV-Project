function EducationFormList(props) {
    return (
        <div>
            {props.educationArr.map(education => {
                return  <div key={education.key} className='flex column form-item'>
                            <div className='flex' style={{justifyContent: 'space-evenly'}}>
                                <div className='flex column'>
                                    <label>Institution</label>
                                    <input className='institution mini-input' type='text' defaultValue={education.institution}></input>
                                    <label>Degree</label>
                                    <input className='degree mini-input' type='text' defaultValue={education.degree}></input>
                                </div>
                                <div className='flex column'>
                                    <label>From</label>
                                    <input type='date' className='from' defaultValue={education.from}></input>
                                    <label>To</label>
                                    <input type='date' className='to' defaultValue={education.to}></input>
                                </div>
                            </div>
                            <div className='flex column align-center'>
                                <label>Education Description</label>
                                <textarea className='description' defaultValue={education.description} cols="40" rows="3"></textarea>
                            </div>
                            <div className='flex justify-center' style={{margin: '10px 0'}}>
                                <button className='edit-btn' id={education.key} onClick={props.modifyEducation}>Edit</button>
                                <button className='delete-btn' id={education.key} onClick={props.modifyEducation}>Delete</button>
                            </div>
                        </div>
            })}
        </div>
    )
}

export default EducationFormList