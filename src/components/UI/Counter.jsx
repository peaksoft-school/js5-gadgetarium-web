import { useState } from 'react'

import styled from 'styled-components'

const Counter = (props) => {
   const [count, setCount] = useState(0)
   const plus = () => {
      setCount((prev) => prev + 1)
   }
   const minus = () => {
      setCount((prev) => prev - 1)
   }
   props.count(count)
   return (
      <div>
         <Total>Количество:</Total>
         <Count>
            <Plus onClick={plus}>+</Plus>
            <h4> {count}</h4>
            <Minus onClick={minus}>-</Minus>
         </Count>
      </div>
   )
}
export default Counter
const Total = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 700;
   font-size: 16px;
   line-height: 150%;
   color: #292929;
`
const Count = styled.div`
   width: 120px;
   display: flex;
   align-items: center;
   margin: 10px 0px;
   & h4 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 135.94%;
      color: #909cb5;
   }
`
const Minus = styled.button`
   width: 32px;
   height: 32px;
   border-radius: 50%;
   font-size: 20px;
   padding: 0px;
   border: 1px solid #384255;
   margin: 0px 10px;
`
const Plus = styled.button`
   width: 32px;
   height: 32px;
   border-radius: 50%;
   font-size: 20px;
   padding: 0px;
   color: white;
   background-color: #384255;
   border: none;
   margin: 0px 10px;
`
