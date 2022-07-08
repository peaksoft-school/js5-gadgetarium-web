import React from 'react'

import Button from './components/UI/Button'

function App() {
   return (
      <div>
         <Button
            width="400px"
            height="44px"
            background="gray"
            hover={{ background: 'green', color: 'white' }}
         >
            Add
         </Button>
      </div>
   )
}

export default App
