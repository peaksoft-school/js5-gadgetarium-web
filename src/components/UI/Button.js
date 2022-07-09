import { styled } from '@mui/material'

import { ReactComponent as BasketIcon } from '../../assets/icons/Vector.svg'

function Button({ children, ...props }) {
   return (
      <ButtonStyled {...props}>
         {props.showbasketicon && <BasketIconStyled {...props} />}
         {children}
      </ButtonStyled>
   )
}
export default Button
const ButtonStyled = styled('button')((props) => ({
   fontSize: props.fontSize || '16px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   color: props.color || 'white',
   background: props.background || '#E313BF',
   width: props.width,
   height: props.height || '43px',
   border: props.border || ' none',
   borderRadius: props.borderRadius || '4px',
   '&:hover': {
      ...props.hover,
   },
   '&:active': {
      ...props.active,
   },
}))
const BasketIconStyled = styled(BasketIcon)`
   width: 20.72px;
`
