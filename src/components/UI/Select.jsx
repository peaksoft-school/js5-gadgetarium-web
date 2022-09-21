import React from 'react'

import { styled } from '@mui/material'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import SelectMui from '@mui/material/Select'

const Select = ({
   placeholder,
   label,
   value,
   variant,
   onChange,
   options,
   getOptionLabel,
   getOptionValue,
}) => {
   const handleChange = (event) => {
      onChange(event.target.value)
   }
   return (
      <BoxStyled variant={variant}>
         <StyledInputLabel>{label}</StyledInputLabel>
         <FormControl placeholder={placeholder} fullWidth>
            <StyledSelectMui onChange={handleChange} value={value}>
               {options?.map((item) => {
                  return (
                     <MenuItem key={item} value={getOptionValue(item)}>
                        {getOptionLabel(item)}
                     </MenuItem>
                  )
               })}
            </StyledSelectMui>
         </FormControl>
      </BoxStyled>
   )
}
export default Select

const BoxStyled = styled(Box)`
   width: ${(props) => (props.variant === 'sort' ? '396px' : '610px')};
   background: #ffffff;
   border-radius: 6px;
   & fieldset {
      border: 1px solid #c4c4c4 !important;
   }
`
const StyledInputLabel = styled(InputLabel)`
   margin-bottom: 10px;
`
const StyledSelectMui = styled(SelectMui)`
   height: 39px;
`
