import React from 'react'

function MenuItem(props) {
   const { text, onChange, sortType } = props

   const onClickItemHandler = (value) => {
      if (props.onClose) props.onClose()
      onChange('sort', value)
   }

   return <li onClick={() => onClickItemHandler(sortType)}>{text}</li>
}

export default MenuItem
