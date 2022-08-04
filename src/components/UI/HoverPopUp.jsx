import * as React from 'react'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import { styled } from 'styled-components'

export default function AccountMenu() {
   const [anchorEl, setAnchorEl] = React.useState(null)
   const open = Boolean(anchorEl)
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }

   //    const changeClick = () => {

   //    }
   //    const totalPrice = props.card.reduce(
   //       (prev, current) => prev + current.price,
   //       0
   //    )

   return (
      <>
         <Box>
            <Tooltip title="Account settings">
               <IconButton
                  onClick={handleClick}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
               >
                  <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
               </IconButton>
            </Tooltip>
         </Box>
         <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
               elevation: 0,
               sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                     width: 32,
                     height: 32,
                     ml: -0.5,
                     mr: 1,
                  },
                  '&:before': {
                     content: '""',
                     display: 'block',
                     position: 'absolute',
                     top: 0,
                     right: 14,
                     width: 10,
                     height: 10,
                     bgcolor: 'background.paper',
                     transform: 'translateY(-50%) rotate(45deg)',
                     zIndex: 0,
                  },
               },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
         >
            <Box1>
               {/* {buttotaray.map((el) => (
                  <StyledMenuItem
                     key={el}
                     onClick={}
                  ></StyledMenuItem>
               ))} */}

               <StyledMenuItem>
                  <Div1>
                     hi <Avatar /> Profile
                  </Div1>
               </StyledMenuItem>
               <StyledMenuItem>
                  <Div1>
                     hi <Avatar /> Profile
                  </Div1>
               </StyledMenuItem>
               <Div2>
                  <button>Оформить заказ</button>
                  <p>Итог: {}</p>
               </Div2>
            </Box1>
         </Menu>
      </>
   )
}
const Box1 = styled('div')`
   width: 500px;
   height: 277px;
   display: flex;
   padding: 30px 22px 20px 28px;
   flex-direction: column;
`

const StyledMenuItem = styled(MenuItem)`
   width: 490px;
   height: 89px;
   border-bottom: 1px solid rgba(133, 143, 164, 0.15);
`
const Div1 = styled('div')`
   width: 490px;
   height: 89px;
   display: flex;
   align-items: center;
   justify-content: space-between;
`
const Div2 = styled('div')`
   width: 456px;
   height: 89px;
   display: flex;
   align-items: center;
   justify-content: space-between;
`
