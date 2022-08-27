import * as React from 'react'

import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'

import Character from './Character'
import Description from './Description'

export default function LabTabs() {
   const [value, setValue] = React.useState('1')

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
         <TabContext value={value}>
            <Box sx={{ borderBottom: '1px solid  #CDCDCD' }}>
               <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  indicatorColor="secondary"
               >
                  <Tab label="Описание" value="1" />
                  <Tab label="Характеристики" value="2" />
                  <Tab label="Отзывы" value="3" />
                  <Tab label="Доставка и оплата" value="4" />
               </TabList>
            </Box>
            <TabPanel value="1">
               <Description />
            </TabPanel>
            <TabPanel value="2">
               <Character />
            </TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">Item 4</TabPanel>
         </TabContext>
      </Box>
   )
}
