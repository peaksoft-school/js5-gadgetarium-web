import { IconButton } from '@mui/material'
import Slide from '@mui/material/Slide'
import Snackbar from '@mui/material/Snackbar'
import styled from 'styled-components'

import { ReactComponent as Close } from '../../../assets/icons/closeIcon.svg'
import { ReactComponent as Error } from '../../../assets/icons/ErrorIcons.svg'

const SlideTransition = (props) => {
   return <Slide {...props} direction="left" key="error" />
}

const ErrorSnackbar = ({ handleClose, open, message }) => {
   return (
      <StyledSnackbarContainer
         open={open}
         autoHideDuration={13000}
         onClose={handleClose}
         transitionDuration={{ enter: 1000, exit: 2000 }}
         TransitionComponent={SlideTransition}
         TransitionProps={{ enter: true, exit: false }}
         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
         message={<SnackbarParagrapgh>{message}</SnackbarParagrapgh>}
         action={[
            <>
               <StyledError />
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

export default ErrorSnackbar

const SnackbarParagrapgh = styled.p`
   padding: 20px 15px;
   color: #fff;
   font-size: 18px;
   font-weight: 400;
   font-family: 'Inter', sans-serif;
`
const StyledError = styled(Error)`
   margin-right: 10px;
`
const StyledSnackbarContainer = styled(Snackbar)`
   & .css-1eqdgzv-MuiPaper-root-MuiSnackbarContent-root {
      background: #202027;
   }
`
