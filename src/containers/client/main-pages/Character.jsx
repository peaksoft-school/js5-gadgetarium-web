import { useState } from 'react'

import styled from 'styled-components'

const Shows = (props) => {
   return (
      <Show>
         {props.name} <p>{props.text}</p>{' '}
      </Show>
   )
}

const Info = (props) => {
   const [show, setShow] = useState({
      character: false,
      memory: false,
      options: false,
   })
   const characterShow = () => {
      setShow({ ...show, character: !show.character })
   }
   const memoryShow = () => {
      setShow({ ...show, memory: !show.memory })
   }
   const optionsShow = () => {
      setShow({ ...show, options: !show.options })
   }
   return (
      <div>
         <Div onClick={characterShow}>
            <h1> Основные xарактеристики</h1>
            {!show.character && <p>&#9658;</p>}
            {show.character && <p> &#9660;</p>}
         </Div>
         {show.character &&
            info.map((el) => (
               <Shows key={el.name} name={el.name} text={el.text} />
            ))}

         <Div onClick={memoryShow}>
            <h1>Память и процессор</h1>
            {!show.memory && <p>&#9658;</p>}
            {show.memory && <p> &#9660;</p>}
         </Div>
         {show.memory &&
            props.character?.map((el) => (
               <Shows key={el.id} name={el.key} text={el.value} />
            ))}
         <Div onClick={optionsShow}>
            <h1>Дополнительные xарактеристики</h1>
            {!show.options && <p>&#9658;</p>}
            {show.options && <p> &#9660;</p>}
         </Div>
      </div>
   )
}

const Character = (props) => {
   return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
         <h1>Характеристики</h1>
         <Info character={props.character} />
      </div>
   )
}
export default Character
const Show = styled.div`
   border-bottom: 1px solid #c2c7d1;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 150%;
   color: #384255;
   padding: 10px 0px;
   display: flex;
   justify-content: space-between;
   & p {
      width: 60%;
   }
   /* text-align: left; */
`
const info = [
   {
      name: 'Тип дорожки',
      text: 'Домашняя',
   },
   {
      name: 'Мощность двигателя',
      text: '3,5 л.с. постоянная',
   },
   {
      name: 'Тип двигателя',
      text: 'DC',
   },
   {
      name: 'Регулировка скорости',
      text: '1-19.3 км/ч',
   },
   {
      name: 'Беговое полотно',
      text: '3-х слойное, усиленное 2,5 мм',
   },
   {
      name: ' Наклон бегового полотна',
      text: '0 - 15%',
   },
   {
      name: ' Размер бегового полотна (ДхШ)',
      text: '152 x 51 см',
   },
   {
      name: ' Диаметр задних валов',
      text: '70 мм',
   },
   {
      name: 'Программы тренировки',
      text: '9 предустановленных + возможность сохранения пользовательских программ',
   },
]
const Div = styled.div`
   /* border-top: 1px solid #c2c7d1; */
   border-bottom: 1px solid #c2c7d1;
   width: 930px;
   padding: 20px 0px;
   display: flex;
   justify-content: space-between;
   cursor: pointer;
   & p {
      font-size: 18px;
      margin: 0px 10px;
   }
   & h1 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      line-height: 120%;
      color: #384255;
   }
`
