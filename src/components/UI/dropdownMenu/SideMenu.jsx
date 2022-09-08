import React from 'react'

import { Popover } from '@mui/material'
import styled from 'styled-components'

function SideMenu(props) {
   const { text, children } = props

   const [anchorEl, setAnchorEl] = React.useState(null)
   const open = Boolean(anchorEl)

   function handleClick(event) {
      setAnchorEl(event.currentTarget)
   }

   function handleClose() {
      if (props.onClose) props.onClose()
      setAnchorEl(null)
   }

   const childrenWithNewProps = React.Children.map(children, (child) =>
      React.cloneElement(child, { onClose: handleClose })
   )

   return (
      <>
         <li onClick={handleClick}>{text}</li>
         <Popover
            id="dropdown-id"
            open={open}
            anchorEl={anchorEl}
            // eslint-disable-next-line react/jsx-no-bind
            onClose={handleClose}
            anchorOrigin={{
               vertical: 'top',
               horizontal: 'right',
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'left',
            }}
         >
            <SortingItems>{childrenWithNewProps}</SortingItems>
         </Popover>
      </>
   )
}

export default SideMenu

const SortingItems = styled.ul`
   padding: 20px;
   list-style: none;
   display: flex;
   flex-direction: column;
   gap: 16px;
   & li {
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      color: #292929;
      cursor: pointer;

      :hover {
         color: #cb11ab;
      }
   }
`
