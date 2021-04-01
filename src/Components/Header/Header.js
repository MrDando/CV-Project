import React from 'react'
import uniqid from "uniqid";

function Options(props) {
    return (
        props.colorSchemes.map(scheme => {
            const id = uniqid()
            return <option key={id} value={scheme}>{scheme}</option>
        })
    )
}

function Header (props) {
    return (
        <header className='flex justify-center align-center'>
          <div className='webpage-title'>
            <h1>CV Creator</h1>
          </div>
          <div className='select-container flex'>
            <div>
              <p>CV Template</p>
              <select className='cv-select' onChange={props.switchCV}>
                      <option value="1">Template1</option>
                      <option value="2">Template2</option>
              </select>
            </div>
            <div>
                <p>Color Scheme</p>
                <select className='colorscheme-select' onChange={props.switchColorScheme}>
                    <Options colorSchemes={props.colorSchemes}/>
                </select>
            </div>
          </div>
        </header>
    )
}

export default Header