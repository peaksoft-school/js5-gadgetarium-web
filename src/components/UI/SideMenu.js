import React from 'react'

import { styled } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Popover from '@mui/material/Popover'

function SideMenu(props) {
   const { text } = props

   const [anchorEl, setAnchorEl] = React.useState(null)
   const open = Boolean(anchorEl)

   // function handleClick(event) {
   //    setAnchorEl(event.currentTarget)
   //    props.onSideMenu()
   // }

   // function handleClose() {
   //    if (props.onClose) props.onClose()
   //    setAnchorEl(null)
   // }

   const childrenWithNewProps = React.Children.map(props.children, (child) =>
      React.cloneElement(child, {
         onClose: () => {
            if (props.onClose) props.onClose()
            setAnchorEl(null)
         },
      })
   )

   return (
      <div>
         <Grid style={styles} item xs>
            <StyledButton
               color="inherit"
               size="large"
               fullWidth
               onClick={(event) => {
                  setAnchorEl(event.currentTarget)
               }}
            >
               <StyledP> {text}</StyledP>
               <p> &rsaquo;</p>
            </StyledButton>
            <Popover
               id="dropdown-id"
               open={open}
               anchorEl={anchorEl}
               onClose={() => {
                  if (props.onClose) props.onClose()
                  setAnchorEl(null)
               }}
               anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
               }}
               transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
               }}
            >
               <Grid container direction="column" style={style}>
                  {childrenWithNewProps}
               </Grid>
            </Popover>
         </Grid>
      </div>
   )
}

export default SideMenu
const styles = {
   minWidth: '372px',
   '&:active': {
      backgroundColor: '#CB11AB;',
   },
   '&:hover': {
      backgroundColor: '#CB11AB;',
      color: 'white',
   },
}
const StyledP = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
`
const StyledButton = styled(Button)({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   minWidth: '100%',
   textAlign: 'left',
   borderRadius: '30px',
   // padding: '10px 5px',
   margin: '0px',
   '&:hover': {
      backgroundColor: '#CB11AB',
      color: 'white',
   },
})
// const butt = {
//    display: 'flex',
//    justifyContent: 'space-between',
//    alignItems: 'center',
//    minWidth: '100%',
//    textAlign: 'left',
//    borderRadius: '30px',
//    // padding: '10px 5px',
//    margin: '0px',
//    '&:hover': {
//       backgroundColor: '#CB11AB',
//       color: 'white',
//    },
// }
const style = {
   // '&:active': {
   //    backgroundColor: '#CB11AB;',
   // },
   // '&:hover': {
   //    backgroundColor: '#CB11AB;',
   //    color: 'white',
   // },
   borderRadius: 6,
   display: 'flex',
   alignItems: 'flex-start',
   // justify="center"
   // alignItems="flex-start"
   width: 'auto',
   color: 'rgb(55, 65, 81)',
   boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
}
