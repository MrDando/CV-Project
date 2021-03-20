
import React from 'react'

import Personal from './Components/Personal'
import Professional from './Components/Professional'

function App() {
  return (
    <div className='flex justify-center scale-down'>
      <div className='cv flex'>
      <Personal />
      <Professional />
    </div>
    </div>
    
  );
}

export default App;
