import * as React from 'react'

import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'

export default function RadioButtons({
   value,
   onChange,
   label,
   id,
   ariaLabel,
   name,
}) {
   return (
      <FormControl>
         <FormLabel id={id}>{label}</FormLabel>
         <RadioGroup
            row
            aria-labelledby={ariaLabel}
            name={name}
            value={value}
            onChange={onChange}
         >
            <FormControlLabel
               value={value}
               control={<Radio color="secondary" />}
               label={label}
            />
         </RadioGroup>
      </FormControl>
   )
}
