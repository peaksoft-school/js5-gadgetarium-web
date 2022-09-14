import { styled } from '@mui/material'
import MuiCheckbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'

const Checkbox = ({ onChange, checked, label, ...props }) => {
   return (
      <FormGroup>
         <StyledMuiCheckbox
            control={
               <StyledCheckbox
                  onChange={onChange}
                  checked={checked}
                  {...props}
               />
            }
            label={label}
         />
      </FormGroup>
   )
}
export default Checkbox

const StyledMuiCheckbox = styled(FormControlLabel)`
   .MuiFormControlLabel-label {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      color: #384255;
   }
`
const StyledCheckbox = styled(MuiCheckbox)`
   .MuiSvgIcon-root {
      width: 20px;
      height: 20px;
   }
   &:hover {
      color: ${({ bgcolor }) => (bgcolor ? '#858FA4' : '#E313BF')};
   }
   &:active {
      color: ${({ bgcolor }) => (bgcolor ? '#858FA4' : '#E313BF')};
   }
   &.Mui-checked {
      color: ${({ bgcolor }) => (bgcolor ? '#2FC509' : '#E313BF')};
   }
`
