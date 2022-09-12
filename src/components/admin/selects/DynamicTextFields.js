import React from 'react'

// import { InputLabel } from '@mui/material'
// import styled from 'styled-components'

import AdminSelect from '../../UI/AdminSelect'

const SelectCharacter = ({ setCharacters, option }) => {
   const selectChange = (selectedOption) => {
      const { key, value } = selectedOption
      setCharacters((prevState) => {
         const newArr = prevState.find((elem) => elem.key === key)
         if (newArr) {
            return prevState.map((elem) => {
               if (elem.key === key) {
                  return selectedOption
               }
               return elem
            })
         }
         return [...prevState, { key, value }]
      })
   }

   return option?.option.map((data) => (
      <div key={data.id}>
         <AdminSelect
            options={data.option}
            placeholder={data.placeholder}
            onChange={selectChange}
            label={data.placeholder}
         />
      </div>
   ))
}

export default SelectCharacter

// const StyledInputLabel = styled(InputLabel)`
//    margin-bottom: 3px;
//    color: #384255 !important;
//    font-family: 'Inter' !important;
// `
// const RequiredLabel = styled.span`
//    color: red;
// `
