import { styled } from '@mui/material'
import MuiButton from '@mui/material/Button'

function Button({ children, onClick, ...props }) {
   return (
      <ButtonStyled onClick={onClick} {...props}>
         {children}
      </ButtonStyled>
   )
}
export default Button

const ButtonStyled = styled(MuiButton)`
   font-family: 'Inter';
   font-style: normal;
   font-size: 16px;
   line-height: 19px;
   color: #ffffff;
   padding: 12px 19px;
   gap: 6px;
   width: ${(props) => props.width || '300px'};
   height: ${(props) => props.height || '44px'};
   border-radius: 4px;
   background: ${(props) => props.background || 'rgba(0, 0, 0, 0.25)'};
   border: ${(props) => props.border || '1px solid #CB11AB'};

   &:hover {
      background: ${(props) => props.background || '#CB11AB'};
   }
   &:active {
      background: ${({ props }) => props || '#E20FBE'};
   }
`
