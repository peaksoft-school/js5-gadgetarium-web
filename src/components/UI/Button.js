import { styled } from '@mui/material'
import MuiButton from '@mui/material/Button'

import { ReactComponent as BusketIcon } from '../../assets/icons/busket.svg'

function Button(props) {
   return (
      <ButtonStyled
         fullWidth={props.fullWidth}
         onClick={props.onClick}
         {...props}
      >
         {props.basketIcon && <BasketIconStyled {...props} />}

         {props.children}
      </ButtonStyled>
   )
}
export default Button

const ButtonStyled = styled(MuiButton)`
   text-transform: none;
   display: flex;
   justify-content: space-between;
   background: none;
   weight: 500;
   font-size: 14px;
   line-height: 16.95px;
   border-radius: 4px;
   color: #ffffff;
   padding: 12px 19px 12px 19px;
   text-align: center;
   &:hover {
      background: #e313bf;
      color: #ffffff;
   }
   &:active {
      background: #c90ea9;
      color: #ffffff;
   }
   &::after {
      content: url(BusketIcon);
   }

   width: ${(props) => (props.width ? props.width : '')};
   height: ${(props) => (props.height ? props.height : '')};
   color: ${(props) => (props.Color ? props.Color : '')};
   background: ${(props) => (props.background ? props.background : ' #E20FBE')};
   border: ${(props) => (props.border ? props.border : '')};

   &:hover {
      background: ${(props) => props.background || '#CB11AB'};
   }
   &:active {
      background: ${({ props }) => props || '#E20FBE'};
   }

   &.MuiButton-contained {
      background-color: #2fc509;
      font-size: 14px;
      border: none;
      color: #ffffff;
      &:hover {
         background: #2fc509;
      }
      &:active {
         background: #2fc509;
      }
   }
   &.MuiButton-outlined {
      background: none;
      color: #c90ea9;
      border: 1px solid #c90ea9;
   }
   &:hover {
      background: ${(props) => props.background || '#CB11AB'};
      color: #ffffff;
   }
   &:active {
      background: ${({ props }) => props || '#E20FBE'};
      color: #ffffff;
   }
`
const BasketIconStyled = styled(BusketIcon)`
   width: 20.72px;
   height: 21px;
   margin-right: 6px;
`
