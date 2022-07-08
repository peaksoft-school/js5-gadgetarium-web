import React from 'react'

import Button from './components/UI/Button'

function App() {
   return (
      <div>
         <Button
            width="100px"
            height="30px"
            background="gray"
            hover={{ background: 'red', color: 'white' }}
         >
            Add
         </Button>
      </div>
   )
}

export default App
