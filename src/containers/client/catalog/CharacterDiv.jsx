import { styled } from '@mui/material'

import Arrow from '../../../assets/icons/pinkUp.svg'

const CharacterDiv = (props) => {
   return (
      <Div>
         <Show onClick={props.showDiv}>
            <h4>{props.name}</h4>
            {props.show && <img src={Arrow} alt="arrow" />}
            {!props.show && <Rotate src={Arrow} alt="arrow" />}
         </Show>
         {props.children}
      </Div>
   )
}
export default CharacterDiv
const Div = styled('div')`
   border-top: 1px solid #e8e8e8;
   margin: 10px 0px;
   padding: 3% 0px;
`
const Show = styled('div')`
   display: flex;
   margin-bottom: 3%;
   cursor: pointer;
   justify-content: space-between;
   align-items: center;

   h4 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: #384255;
   }
`
const Rotate = styled('img')`
   transform: rotate(180deg);
`
