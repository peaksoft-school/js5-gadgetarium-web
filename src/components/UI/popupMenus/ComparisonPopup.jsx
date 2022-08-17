import styled from '@emotion/styled'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import { ReactComponent as IconDelete } from '../../../assets/icons/Vertor-delete.svg'
import Button from '../Button'

export default function AccountMenu({ cart, title, open, onClose, ...props }) {
   return (
      <div>
         <Menu
            id="account-menu"
            open={open}
            onClose={onClose}
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
                     <StyledMenuItem key={el.id} img={el.img}>
                        <ContainerDates>
                           <div>{el.title}</div>
                           <div>{el.color}</div>
                        </ContainerDates>
                        <ContainerPrice>{el.price}</ContainerPrice>
                        <img src={el.img} alt="" />
                        <ContainerIcon onClick={props.handlerClick}>
                           <IconDelete />
                        </ContainerIcon>
                     </StyledMenuItem>
                  ))}
               </Div>
               <ContainerButton>
                  <Button
                     variant="contained"
                     width="117px"
                     height="43px"
                     onClick={props.handleChange}
                  >
                     {title}
                  </Button>
               </ContainerButton>
            </MenuBlock>
         </Menu>
      </div>
   )
}

const MenuBlock = styled('div')`
   width: 510px;
   height: 277px;
   padding-right: 3px;
   display: flex;
   flex-direction: column;
`

const StyledMenuItem = styled(MenuItem)`
   width: 456px;
   height: 89px;
   border-bottom: 1px solid rgba(133, 143, 164, 0.15);
`

const Div = styled('div')`
   padding: 20px 24px 20px 24px;
   width: 100%;
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   justify-content: space-around;

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
const ContainerButton = styled(Div)`
   height: 140px;
`
const ContainerDates = styled('div')`
   width: 255px;
   height: 48px;
   margin-left: 72px;
`

const ContainerPrice = styled('div')`
   width: 72px;
   height: 17px;
   margin-right: 25px;
   margin-bottom: 30px;
`
const ContainerIcon = styled('p')`
   margin-bottom: 30px;
   margin-right: -15px;
`
