import React, { useState } from 'react'

import { styled, Button } from '@mui/material'

function Tab({ buttonarray, value, text, id, ...props }) {
   const [toggleState, setToggleState] = useState('1')

   return (
      <>
         <div>
            {buttonarray.map((el, index) => (
               <STyledButton
                  key={el}
                  value={value}
                  active={toggleState === index}
                  onClick={() => setToggleState(index)}
                  {...props}
               >
                  {el.text}({el.data.length})
               </STyledButton>
            ))}
         </div>
         <div>
            <div>{toggleState} </div>
         </div>
      </>
   )
}

export default Tab

const STyledButton = styled(Button)`
   height: 34px;
   margin-left: 10px;
   padding: 8px 20px 9px 20px;
   border-radius: 4px;
   text-transform: none;
   font-family: 'Inter, sans-serif';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 19px;
   background-color: #e0e2e7;
   color: ${({ active }) => (active ? '#FFFFFF;' : '#384255')};

   &:focus-within {
      background: #384255;
   }
`
