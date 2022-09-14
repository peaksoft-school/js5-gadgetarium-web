import { useState } from 'react'

import { styled } from '@mui/material'
import { useParams } from 'react-router'

import Checkbox from '../../../components/UI/Checkbox'

import CharacterDiv from './CharacterDiv'

const Character = (props) => {
   const { category } = useParams()
   const [filtered, setFiltered] = useState([
      {
         key: null,
         values: [],
      },
   ])
   const onChangeFilters = (e, key) => {
      const { value, checked } = e.target
      console.log(value, checked, key)
      // setFiltered([...filtered,])
      if (checked) {
         console.log('wrok')
         setFiltered([
            ...filtered,
            {
               key,
               values: [value],
            },
         ])
         const arr = filtered.filter((el) => el.key === key)
         if (arr) {
            console.log('wrok2')

            filtered.forEach((el) => el.values.push(value))
         }
      }

      // // const updatedFilters = [...filters, { key: keyName, values: name }]
      // const filteredKeyObj = updatedFilters.filter((el) => el.key === keyName)
      // if (filteredKeyObj) {
      //    filteredKeyObj.foreach((el) => el.value.push(name))
      //    setFilters(filteredKeyObj)
      //    // console.log(filters)
      // } else {
      //    setFilters([...filters, { key: keyName, values: name }])
      // }
   }
   // ;[{ key: 'key', values: ['value1', 'value2'] }]
   console.log(filtered)

   return (
      <CharacterDiv
         showDiv={() => props.setShow((prev) => !prev)}
         name={props.name}
         show={props.show}
      >
         {props.show && (
            <>
               {props.character.map((el) =>
                  el.name ? (
                     <Checkbox
                        onChange={() =>
                           props.onChange({ id: el.id, name: el.name })
                        }
                        cheked={category === el.name ? true : props.checked}
                        label={el.name}
                        name={el.name}
                     />
                  ) : (
                     <Checkbox
                        onChange={(e) => onChangeFilters(e, el.key)}
                        label={el.value}
                        name={el}
                        key={el.key}
                        value={el.value}
                     />
                  )
               )}
               <BlueText onClick={() => props.setShow((prev) => !prev)}>
                  &uarr;Скрыть
               </BlueText>
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
