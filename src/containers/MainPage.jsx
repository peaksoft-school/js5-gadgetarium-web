import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import SignIn from '../components/autorization/SignIn'
import SignUp from '../components/autorization/SignUp'
import Button from '../components/UI/Button'
import { logout } from '../store/slices/authSlice'

const MainPage = () => {
   const [open, setOpen] = useState(false)
   const [openUp, setOpenUp] = useState(false)
   const dispatch = useDispatch()
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
   const logOut = () => {
      dispatch(logout())
   }
   return (
      <div>
         <Button variant="outlined" onClick={isOpen}>
            Login
         </Button>
         <Button variant="outlined" onClick={isOpenUp}>
            Register
         </Button>
         <Button variant="outlined" onClick={logOut}>
            Logout
         </Button>
         <SignIn open={open} onClose={onClose} />
         <SignUp open={openUp} onClose={onCloseUp} />
         <Link to="/person">
            <Button variant="outlined">Link</Button>
         </Link>
      </div>
   )
}

export default MainPage
