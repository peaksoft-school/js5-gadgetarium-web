import { useState } from 'react'

// import ReactHookForm from './components/autorization/ReactHookForm'

// import SignUp from './components/autorization/SignUp'
import SignUp from './components/autorization/SignUpHookForm'
import Button from './components/UI/Button'

function App() {
   const [open, setOpen] = useState(false)

   const isOpen = () => {
      setOpen(true)
   }

   const onClose = () => {
      setOpen(false)
   }
   return (
      <div>
         {/* <ReactHookForm /> */}
         <Button variant="outlined" onClick={isOpen}>
            Click
         </Button>
         <SignUp open={open} onClose={onClose} />
      </div>
   )
}

export default App
