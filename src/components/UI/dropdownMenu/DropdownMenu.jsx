import React, { Fragment } from 'react'

import { Popover } from '@mui/material'
import styled from 'styled-components'

import { ReactComponent as CheckSvg } from '../../../assets/icons/CheckIcon.svg'

function DropdownMenu(props) {
   const { children } = props

   const [anchorEl, setAnchorEl] = React.useState(null)
   const open = Boolean(anchorEl)

   function handleClick(event) {
      setAnchorEl(event.currentTarget)
   }

   function handleClose() {
      setAnchorEl(null)
   }

   const childrenWithNewProps = React.Children.map(children, (child) =>
      React.cloneElement(child, { onClose: handleClose })
   )

   return (
      <>
         <SortingParagraph
            // eslint-disable-next-line react/jsx-no-bind
            onClick={handleClick}
         >
            Сортировать
            <StyledCheckSvg />
         </SortingParagraph>
         <Popover
            id="dropdown-id"
            open={open}
            anchorEl={anchorEl}
            // eslint-disable-next-line react/jsx-no-bind
            onClose={handleClose}
            anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'center',
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'center',
            }}
         >
            <SortingItems>{childrenWithNewProps}</SortingItems>
         </Popover>
      </>
   )
}

export default DropdownMenu

const SortingParagraph = styled.p`
   font-weight: 500;
   font-size: 14px;
   color: #384255;
   cursor: pointer;
`
const StyledCheckSvg = styled(CheckSvg)`
   margin-left: 8px;
`
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
