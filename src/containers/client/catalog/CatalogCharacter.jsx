import { useState } from 'react'

import { styled } from '@mui/material'

import Checkbox from '../../../components/UI/Checkbox'

import CharacterDiv from './CharacterDiv'

const Character = (props) => {
   const [show, setShow] = useState(true)
   return (
      <CharacterDiv
         showDiv={() => {
            setShow((prev) => !prev)
         }}
         name={props.name}
         show={show}
      >
         {show && (
            <>
               {props.character.map((el) => (
                  <Checkbox
                     onChange={(e) => props.onChangeFilter(e, el.key)}
                     label={el.value}
                     key={el.value}
                     value={el.value}
                  />
               ))}
               <BlueText onClick={() => setShow(false)}>&uarr;Скрыть</BlueText>
            </>
         )}
      </CharacterDiv>
   )
}
export default Character
const BlueText = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 140%;
   color: #2c68f5;
   cursor: pointer;
   padding: 16px 0px;
`
