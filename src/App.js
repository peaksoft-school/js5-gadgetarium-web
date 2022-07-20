import { useState } from 'react'

import { Button } from '@mui/material'

import SignUp from './components/autorization/SignUp'

function App() {
   const [open, setOpen] = useState(false)

   const onClose = () => {
      setOpen(false)
   }

   const isOpen = () => {
      setOpen(true)
   }
   return (
      <>
         <Button type="contained" onClick={isOpen}>
            Click
         </Button>
         <SignUp onClose={onClose} open={open} />
      </>
   )
}

export default App
