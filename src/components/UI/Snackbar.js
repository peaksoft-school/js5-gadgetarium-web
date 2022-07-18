import { IconButton } from '@mui/material'
import Slide from '@mui/material/Slide'
import MuiSnackbar from '@mui/material/Snackbar'
import styled from 'styled-components'

import { ReactComponent as Close } from '../../assets/icons/closeIcon.svg'
import { ReactComponent as Error } from '../../assets/icons/ErrorIcons.svg'

const SlideTransition = (props) => {
   return <Slide {...props} direction="left" />
}
/**
 *
 * @param {*if error === 'error' как атрбут} param0
 * @returns то вернется уведомление с ошибкой в message мы пишем текст ошибки)
 */

const Snackbar = ({ handleClose, open, message, link, navigation, error }) => {
   return (
      <StyledSnackbarContainer
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
               {error === 'error' ? (
                  <StyledError />
               ) : (
                  <SnackbarNavigations to={link}>
                     {navigation}
                  </SnackbarNavigations>
               )}
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
const StyledError = styled(Error)`
   margin-right: 10px;
`

const SnackbarNavigations = styled.a`
   padding: 21px 15px;
   color: #3cde14;
   font-size: 18px;
   font-weight: 700;
   cursor: pointer;
   text-decoration: none;
`

const StyledSnackbarContainer = styled(MuiSnackbar)`
   & .css-1eqdgzv-MuiPaper-root-MuiSnackbarContent-root {
      background: #202027;
   }
`
