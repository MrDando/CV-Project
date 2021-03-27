function ExperienceFormList(props) {
    return (
        <div>
            {props.experiences.map(experience => {
                return  <div key={experience.key} className='flex column form-item'>
                            <div className='flex' style={{justifyContent: 'space-evenly'}}>
                                <div className='flex column'>
                                    <label>Position</label>
                                    <input className='position mini-input' type='text' defaultValue={experience.position}></input>
                                    <label>Organization</label>
                                    <input className='employer mini-input' type='text' defaultValue={experience.employer}></input>
                                </div>
                                <div className='flex column'>
                                    <label>From</label>
                                    <input type='date' className='from' defaultValue={experience.from}></input>
                                    <label>To</label>
                                    <input type='date' className='to' defaultValue={experience.to}></input>
                                </div>
                            </div>
                            <div className='flex column align-center'>
                                <label>Job Description</label>
                                <textarea className='description' defaultValue={experience.description} cols="40" rows="4"></textarea>
                            </div>
                            <div className='flex justify-center' style={{margin: '10px 0'}}>
                                <button className='edit-btn' id={experience.key} onClick={props.modifyExperience}>Edit</button>
                                <button className='delete-btn' id={experience.key} onClick={props.modifyExperience}>Delete</button>
                            </div>
                        </div>
            })}
        </div>
    )
}

export default ExperienceFormList