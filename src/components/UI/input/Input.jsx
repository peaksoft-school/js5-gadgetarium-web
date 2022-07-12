import React, { forwardRef } from 'react'

import OutlinedInput from '@mui/material/OutlinedInput'
import styled from 'styled-components'

const Input = forwardRef((props, ref) => {
   return <StyledInput ref={ref} {...props} />
})

export default Input

const StyledInput = styled(OutlinedInput)((props) => ({
   boxSizing: 'borderBox',
   width: props.width || '460px',
   height: props.height || '43px',
   borderRadius: '6px',
}))
