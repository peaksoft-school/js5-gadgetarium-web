import * as React from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

const ProgressStepper = (steps, ...props) => {
   const [active, setactive] = React.useState({
      number: '1',
   })

   const activestyle = (element) => {
      if (element === 1) {
         setactive({ number: element })
      }
      if (element === 2) {
         setactive({ number: element })
      }
      if (element === 3) {
         setactive({
            number: element,
         })
      }
   }
   return (
      <Fragment>
         {steps.map((item, index) => {
            return (
               <StyledDiv active={+active.number - 1 === index}>
                  <StyledButton
                     onClick={() => {
                        props.onClick(item.id)
                        activestyle(item.id)
                     }}
                  >
                     {item.id}
                  </StyledButton>
                  <p>{item.text}</p>
                  {item.line && <SpanLine> </SpanLine>}
               </StyledDiv>
            )
         })}
      </Fragment>
   )
}
export default ProgressStepper
const SpanLine = styled('span')`
   width: 30px;
   height: 0px;
   border: 1px solid #384255;
   margin-top: 32px;
   margin-left: 35px;
`
const Fragment = styled('div')`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-evenly;
`
const StyledButton = styled('div')`
   margin-right: 16px;
   width: 56px;
   height: 56px;
   border-radius: 50%;
   background: #91969e;
   display: flex;
   align-items: center;
   justify-content: center;
   color: #ffffff;
   font-style: normal;
   font-weight: 600;
   font-size: 28px;
   line-height: 34px;
`
const StyledDiv = styled('div')`
   display: flex;
   justify-content: space-evenly;
   & > p {
      font-size: 18px;
      color: #384255;
   }
   ${({ active }) =>
      active &&
      css`
         & > div {
            background: #cb11ab;
         }
         & > p {
            color: #cb11ab;
         }
      `}
`
