import { useState } from 'react'

import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import styled from 'styled-components'

import CheckIcon from '../../assets/icons/CheckIcon.svg'
import UserIcon from '../../assets/icons/UserIcon.svg'

const PopUp = ({ icon, variant, ...props }) => {
   const [modal, setModal] = useState(false)

   const handleClick = () => {
      setModal((prev) => !prev)
   }

   const clickHandler = (option) => {
      setModal(false)
      option.onClick(option)
   }

   return (
      <div>
         {variant === 'default' ? (
            <Div onClick={handleClick}>
               <Span>{props}</Span>
               {icon === 'icon' ? <img src={UserIcon} alt="" /> : ''}
               <Span>{props.title}</Span>
               {icon === 'icon' ? <img src={CheckIcon} alt="" /> : ''}
            </Div>
         ) : (
            <div>
               <p>{props.name}</p>
               <Img src={CheckIcon} alt="" onClick={handleClick} />
            </div>
         )}
         {modal && (
            <Stack>
               <PaperStyle>
                  <MenuList>
                     {props.list.map((el) => (
                        <Menu onClick={() => clickHandler(el)} key={el.id}>
                           {el.list}
                        </Menu>
                     ))}
                  </MenuList>
               </PaperStyle>
            </Stack>
         )}
      </div>
   )
}

export default PopUp

const PaperStyle = styled(Paper)`
   z-index: auto;
`

const Span = styled('span')`
   font-size: 16px;
   font-family: 'Inter';
   font-weight: 600;
   color: #384255;
   margin-right: 6px;
`
const Img = styled('img')`
   cursor: pointer;
`
const Div = styled('div')`
   cursor: pointer;
`
const Menu = styled(MenuItem)`
   margin-left: 100px;
`
