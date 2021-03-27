function ExperienceFormList(props) {
    return (
        <div>
            {props.experiences.map(experience => {
                return  <div key={experience.key} className='flex column'>
                            <div className='flex'>
                                <div className='flex column'>
                                    <label htmlFor='position'>Position</label>
                                    <input className='position' name='position' type='text' defaultValue={experience.position}></input>
                                    <label htmlFor='employer'>Organization</label>
                                    <input className='employer' name='employer' type='text' defaultValue={experience.employer}></input>
                                </div>
                                <div className='flex column'>
                                    <div className='flex'>
                                        <label>From</label>
                                        <input type='date' className='from' defaultValue={experience.from}></input>
                                    </div>
                                    <div className='flex'>
                                        <label>To</label>
                                        <input type='date' className='to' defaultValue={experience.to}></input>
                                    </div>
                                </div>
                            </div>
                            <textarea className='description' defaultValue={experience.description}></textarea>
                            <div className='flex justify-center'>
                                <button id={experience.key} onClick={props.modifyExperience}>Edit</button>
                                <button id={experience.key} onClick={props.modifyExperience}>Delete</button>
                            </div>
                        </div>
            })}
        </div>
    )
}

export default ExperienceFormList