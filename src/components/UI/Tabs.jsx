import * as React from 'react'

import { TabContext, TabList, TabPanel } from '@mui/lab'
// import { styled } from '@mui/material/styles'
import Tab from '@mui/material/Tab'

const Tabs = ({ children }) => {
   const [selected, setSelected] = React.useState('1')

   const handleChange = (event, newValue) => {
      setSelected(newValue)
   }

   return (
      <TabContext value={selected}>
         <TabList onChange={handleChange} aria-label="example">
            <Tab label="Смартфоны" value="1" />
            <Tab label="Ноутбуки" value="2" />
         </TabList>
         <TabPanel value="1">{children}</TabPanel>
         <TabPanel value="2">Ноутбуки</TabPanel>
      </TabContext>
   )
}

export default Tabs
