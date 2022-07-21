import React, { useState } from 'react'

import {
   ClickAwayListener,
   MenuItem,
   MenuList,
   Paper,
   Stack,
   styled,
} from '@mui/material'

import { ReactComponent as VectorDown } from '../../assets/icons/VectorDown.svg'
import { ReactComponent as VectorUp } from '../../assets/icons/VectorUp.svg'

const cardList = [
   { title: 'В ожидании', color: '#CB11AB' },
   { title: 'Принять заказ', color: '#08A592' },
   { title: 'В обработке', color: '#F99808' },
   { title: 'Курьер в пути', color: '#2C68F5' },
   { title: 'Доставлен', color: '#3CDE14' },
   { title: 'Отменить', color: '#F10000' },
]
const cashList = [
   { title: 'В ожидании', color: '#CB11AB' },
   { title: 'Принять заказ', color: '#08A592' },
   { title: 'Доставлен', color: '#3CDE14' },
   { title: 'Отменить', color: '#F10000' },
]

function PopUpMenu({ payment }) {
   const [status, setStatus] = useState('В обработке')
   const [color, setColor] = useState('orange')
   const [isOpen, setIsOpen] = useState(false)

   const closeMenuHandler = (title, color) => {
      if (title === 'Отменить') {
         setStatus('Отменен')
      } else if (title === 'Принять заказ') {
         setStatus('Заказ принято')
      } else {
         setStatus(title)
      }
      setColor(color)
      setIsOpen(false)
   }

   const list = payment === 'Наличные' ? cashList : cardList

   return (
      <ClickAwayListener onClickAway={() => setIsOpen(false)}>
         <Menu>
            <p onClick={() => setIsOpen(!isOpen)}>
               <Status color={color}>{status}</Status>
               {isOpen ? <VectorUp /> : <VectorDown />}
            </p>

            {isOpen && (
               <MuiStack>
                  <Paper>
                     <MenuList>
                        {list.map((item) => (
                           <MenuItem
                           key={item.title}
                              onClick={() =>
                                 closeMenuHandler(item.title, item.color)
                              }
                           >
                              {item.title}
                           </MenuItem>
                        ))}
                     </MenuList>
                  </Paper>
               </MuiStack>
            )}
         </Menu>
      </ClickAwayListener>
   )
}

export default PopUpMenu

const MuiStack = styled(Stack)`
   width: 165px;
   position: absolute;
   z-index: 10;
`
const Status = styled('span')`
   color: ${(props) => props.color};
   margin-right: 5px;
`
const Menu = styled('div')`
   width: 165px;
`
