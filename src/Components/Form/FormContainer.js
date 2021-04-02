import React from 'react'
import './FormContainer.css'

import PersonalForm from './PersonalForm'
import ProfessionalForm from './ProfessionalForm'

function FormContainer(props) {
    if (props.data.form === 'personal') {
        return(
            <PersonalForm   data={props.data} 
                            toggleAccordion={props.toggleAccordion}
                            submitForm={props.submitForm}
                            uploadPhoto={props.uploadPhoto} 
                            handleChange={props.handleChange} 
                            addSkill={props.addSkill} 
                            modifySkill={props.modifySkill} 
                            addLanguage={props.addLanguage} 
                            modifyLanguage={props.modifyLanguage}/>
        )
    } else {
        return(
            <ProfessionalForm   data={props.data}
                                toggleAccordion={props.toggleAccordion} 
                                submitSummary={props.submitSummary}
                                submitExperience={props.submitExperience}
                                modifyExperience={props.modifyExperience}
                                submitEducation={props.submitEducation}
                                modifyEducation={props.modifyEducation}/>
        )
    }
}

export default FormContainer


