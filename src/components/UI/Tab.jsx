import * as React from 'react'

import styled from '@emotion/styled'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Tab from '@mui/material/Tab'

export default function LabTabs({ tabsArray, variant, children }) {
   const [value, setValue] = React.useState('Смартфоны')

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <TabContext value={value}>
         <TabList
            onChange={handleChange}
            TabIndicatorProps={{ style: { backgroundColor: '#fff' } }}
            aria-label="lab API tabs example"
         >
            {tabsArray.map((el) => (
               <StyledTab
                  variant={variant}
                  key={el.id}
                  label={el.label}
                  value={el.value}
               />
            ))}
         </TabList>
         {tabsArray.map((el) => {
            return (
               <TabPanel key={el.id} value={el.value}>
                  {children}
               </TabPanel>
            )
         })}
      </TabContext>
   )
}

const StyledTab = styled(Tab)(({ variant }) => ({
   height: '34px',
   marginRight: '12px',
   borderRadius: '4px',
   padding: '8px 20px 9px 20px',
   textTransform: 'none',
   fontFamily: 'Inter, sans-serif',
   fontStyle: 'normal',
   fontWeight: '600',
   fontSize: '14px',
   lineHeight: '19px',
   backgroundColor: '#e0e2e7',
   color: '#384255',
   '&:focus-within': {
      background: '#384255',
      color: '#ffffff',
   },
   ...(variant === 'pink' && {
      '&:focus-within': {
         background: '#CB11AB',
         color: '#ffffff',
      },
   }),
}))
