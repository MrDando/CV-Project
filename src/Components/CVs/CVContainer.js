import React from 'react'

import Template1 from './Template1/Template1'

function CVContainer(props) {
    const template = props.data.cvTemplate
    console.log(props.data)
    if (template === 'template1') {
        return (
            <div>
                <Template1 data={props.data}/>
            </div>
        )
    }
}

export default CVContainer