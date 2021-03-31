import React from 'react'

import Template1 from './Template1/Template1'
import Template2 from './Template2/Template2'

function CVContainer(props) {
    const template = props.data.cvTemplate
    if (template === 'template1') {
        return (
            <div>
                <Template1 data={props.data}/>
            </div>
        )
    } else if (template === 'template2') {
        return (
            <div>
                <Template2 data={props.data}/>
            </div>
        )
    }
}

export default CVContainer