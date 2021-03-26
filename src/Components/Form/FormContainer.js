import React from 'react'

import PersonalForm from './PersonalForm'
import ProfessionalForm from './ProfessionalForm'

function FormContainer(props) {
    if (props.data.form === 'personal') {
        return(
            <PersonalForm   data={props.data} 
                            submitForm={props.submitForm} 
                            handleChange={props.handleChange} 
                            addSkill={props.addSkill} 
                            modifySkill={props.modifySkill} 
                            addLanguage={props.addLanguage} 
                            modifyLanguage={props.modifyLanguage}/>
        )
    } else {
        return(
            <ProfessionalForm   data={props.data} 
                                submitSummary={props.submitSummary}
                                submitExperience={props.submitExperience}
                                modifyExperience={props.modifyExperience}
                                submitEducation={props.submitEducation}/>
        )
    }
}

export default FormContainer


