import * as React from 'react'

// import styled from '@emotion/styled'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { styled } from '@mui/material'
import Tab from '@mui/material/Tab'
import { Outlet, Route, Routes, Link } from 'react-router-dom'

export default function LabTabs({ tabsArray, variant, baseValue }) {
   const [value, setValue] = React.useState(baseValue)

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <TabContext value={value}>
         <StyledTabList
            onChange={handleChange}
            TabIndicatorProps={{ style: { backgroundColor: '#fff' } }}
            aria-label="lab API tabs example"
            sx={{
               '& button.Mui-selected': {
                  backgroundColor: '#384255',
                  color: '#fff',
               },
            }}
         >
            {tabsArray?.map((el) => (
               <Link to={el.value} key={el.id}>
                  <StyledTab
                     variant={variant}
                     key={el.id}
                     label={el.label}
                     value={el.value}
                  />
               </Link>
            ))}
         </StyledTabList>
         <StyledTabPanel>
            <Outlet />
         </StyledTabPanel>
         <Routes>
            <Route>
               {tabsArray.map((i) => (
                  <Route path={i.value} element={i.Component} />
               ))}
            </Route>
         </Routes>
         {/* {tabsArray?.map((el) => {
            return (
               <StyledTabPanel key={el.id} value={el.value}>
                  {el.Component}
               </StyledTabPanel>
            )
         })} */}
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
   fontWeight: '400',
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

const StyledTabList = styled(TabList)`
   & .MuiTabs-indicator {
      display: none;
   }
   & button.Mui-selected {
      background: '#384255';
      span {
         color: white;
      }
      h4 {
         color: #8639b5;
         background-color: white;
      }
   }
`

const StyledTabPanel = styled(TabPanel)`
   padding: 30px 0 0 0;
`
