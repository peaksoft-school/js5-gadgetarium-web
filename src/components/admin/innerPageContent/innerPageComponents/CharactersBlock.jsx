import { useState } from 'react'

import styled from 'styled-components'

const Info = () => {
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
               <>
                  <Show>
                     {' '}
                     Тип дорожки: <p>{el.trackType}</p>{' '}
                  </Show>
                  <Show>
                     {' '}
                     Мощность двигателя <p>{el.motorPower}</p>
                  </Show>
                  <Show>
                     {' '}
                     Тип двигателя<p>{el.engineType}</p>
                  </Show>
                  <Show>
                     {' '}
                     Регулировка скорости<p>{el.speedControl}</p>
                  </Show>
                  <Show>
                     {' '}
                     Беговое полотно<p>{el.runningBelt}</p>
                  </Show>
                  <Show>
                     {' '}
                     Наклон бегового полотна <p> {el.treadmillIncline}</p>
                  </Show>
                  <Show>
                     {' '}
                     Размер бегового полотна (ДхШ) <p>{el.treadmillSize}</p>
                  </Show>
                  <Show>
                     {' '}
                     Диаметр задних валов<p>{el.rearShaftDiameter}</p>
                  </Show>
                  <Show>
                     {' '}
                     Программы тренировки<p>{el.workoutPrograms}</p>
                  </Show>
               </>
            ))}
         <Div onClick={memoryShow}>
            <h1>Память и процессор</h1>
            {!show.memory && <p>&#9658;</p>}
            {show.memory && <p> &#9660;</p>}
         </Div>
         <Div onClick={optionsShow}>
            <h1>Дополнительные xарактеристики</h1>
            {!show.options && <p>&#9658;</p>}
            {show.options && <p> &#9660;</p>}
         </Div>
      </div>
   )
}
const CharactersBlock = () => {
   return (
      <div
         style={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '40vh',
         }}
      >
         <h1>Характеристики</h1>
         <Info />
      </div>
   )
}
export default CharactersBlock

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
      trackType: 'Домашняя',
      motorPower: '3,5 л.с. постоянная',
      engineType: 'DC',
      speedControl: '1-19.3 км/ч',
      runningBelt: '3-х слойное, усиленное 2,5 мм',
      treadmillIncline: '0 - 15%',
      treadmillSize: '152 x 51 см',
      rearShaftDiameter: '70 мм',
      workoutPrograms:
         '9 предустановленных + возможность сохранения пользовательских программ',
   },
]
const Div = styled.div`
   border-bottom: 1px solid #c2c7d1;
   width: 930px;
   padding: 20px 0px;
   display: flex;
   cursor: pointer;
   justify-content: space-between;
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
