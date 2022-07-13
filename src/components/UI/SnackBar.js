import { IconButton } from '@mui/material'
import Slide from '@mui/material/Slide'
import MuiSnackbar from '@mui/material/Snackbar'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ReactComponent as Close } from '../../assets/icons/closeIcon.svg'

const SlideTransition = (props) => {
   return <Slide {...props} direction="left" />
}

const Snackbar = ({ handleClose, open, message, link, navigation }) => {
   return (
      <MuiSnackbar
         open={open}
         autoHideDuration={3000}
         onClose={handleClose}
         transitionDuration={{ enter: 1000, exit: 2000 }}
         TransitionComponent={SlideTransition}
         TransitionProps={{ enter: true, exit: false }}
         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
         message={<SnackbarParagrapgh>{message}</SnackbarParagrapgh>}
         action={[
            <>
               <SnackbarNavigations to={navigation}>{link}</SnackbarNavigations>
               <IconButton
                  key="close"
                  aria-label="Close"
                  color="inherit"
                  onClick={handleClose}
               >
                  <Close />
               </IconButton>
            </>,
         ]}
      />
   )
}

export default Snackbar

const SnackbarParagrapgh = styled.p`
   padding: 20px 15px;
   color: #fff;
   font-size: 18px;
   font-weight: 400;
`

const SnackbarNavigations = styled(Link)`
   padding: 21px 15px;
   color: #3cde14;
   font-size: 18px;
   font-weight: 700;
   cursor: pointer;
   text-decoration: none;
`
