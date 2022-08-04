import { useState } from 'react'

import { Link } from 'react-router-dom'

import SignIn from '../../components/autorization/SignIn'
import SignUp from '../../components/autorization/SignUp'
import Button from '../../components/UI/Button'

const MainPage = () => {
   const [open, setOpen] = useState(false)
   const [openUp, setOpenUp] = useState(false)

   const isOpen = () => {
      setOpen(true)
   }

   const onClose = () => {
      setOpen(false)
   }

   const isOpenUp = () => {
      setOpenUp(true)
   }

   const onCloseUp = () => {
      setOpenUp(false)
   }
   return (
      <div>
         <Button variant="outlined" onClick={isOpen}>
            Click
         </Button>
         <Button variant="outlined" onClick={isOpenUp}>
            Click
         </Button>
         <SignIn open={open} onClose={onClose} />
         <SignUp open={openUp} onClose={onCloseUp} />
         <Link to="/person">
            <Button variant="outlined">Click</Button>
         </Link>
      </div>
   )
}

export default MainPage
