import styled from '@emotion/styled'
import { IconButton } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import { ReactComponent as IconDelete } from '../../../assets/icons/Vertor-delete.svg'
import Button from '../Button'

export default function AccountMenu({
   cart,
   title,
   open,
   onClose,
   anchorEl,
   ...props
}) {
   return (
      <div>
         <Menu
            id="account-menu"
            open={Boolean(anchorEl)}
            onClose={onClose}
            anchorEl={anchorEl}
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
            <MenuBlock>
               <Div>
                  {cart.map((el) => (
                     <StyledMenuItem key={el.id}>
                        <img src={el.image} alt="" />
                        <ContainerDates>
                           <p>{el.name}</p>
                        </ContainerDates>
                        <ContainerPrice>
                           <p>{el.price}c</p>
                        </ContainerPrice>
                        <IconButton onClick={props.handlerClick}>
                           <IconDelete />
                        </IconButton>
                     </StyledMenuItem>
                  ))}
               </Div>
               <ButtonContainer>
                  <Button
                     variant="contained"
                     height="43px"
                     width="50%"
                     onClick={props.handleNavigate}
                  >
                     {title}
                  </Button>
               </ButtonContainer>
            </MenuBlock>
         </Menu>
      </div>
   )
}

const MenuBlock = styled('div')`
   padding-right: 3px;
   display: flex;
   flex-direction: column;
`

const StyledMenuItem = styled(MenuItem)`
   width: 456px;
   height: 89px;
   align-items: flex-start;
   border-bottom: 1px solid rgba(133, 143, 164, 0.15);
   & img {
      height: 90px;
      object-fit: contain;
   }
`

const Div = styled('div')`
   padding: 20px 24px 20px 24px;
   width: 100%;
   display: flex;
   align-items: center;
   flex-wrap: nowrap;
   flex-direction: column;
   height: 180px;

   overflow: auto;
   ::-webkit-scrollbar {
      width: 5px;
   }
   /* Track */
   ::-webkit-scrollbar-track {
      background: #f1f1f1;
   }

   /* Handle */
   ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
   }
   /* Handle on hover */
   ::-webkit-scrollbar-thumb:hover {
      background: #555;
   }
`
const ContainerDates = styled('div')`
   margin-left: 8px;
   width: 240px;
   & p {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #292929;
      white-space: normal;
   }
`

const ContainerPrice = styled('div')`
   width: 72px;
   margin-left: 12px;
   margin-right: 30px;

   & p {
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      color: #384255;
   }
`
const ButtonContainer = styled('div')`
   padding: 0px 24px 20px 24px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`
