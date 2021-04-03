import React from 'react'
import uniqid from "uniqid";

import './Header.css'

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
          <div className='header-right flex align-center'>
            <div className='select-container flex'>
              <div>
                <p>CV Template</p>
                <select className='cv-select select-css' onChange={props.switchCV}>
                        <option value="1">Template1</option>
                        <option value="2">Template2</option>
                        <option value="3">Template3</option>
                </select>
              </div>
              <div style={{marginLeft: '20px'}}>
                  <p>Color Scheme</p>
                  <select className='colorscheme-select select-css' onChange={props.switchColorScheme}>
                      <Options colorSchemes={props.colorSchemes}/>
                  </select>
              </div>
            </div>
            <div className='github-mark-container'>
              <a href='https://github.com/MrDando/CV-Project' target="_blank" rel="noreferrer"><img src={props.gitHubURL} alt=''></img></a>
            </div>
          </div>
        </header>
    )
}

export default Header