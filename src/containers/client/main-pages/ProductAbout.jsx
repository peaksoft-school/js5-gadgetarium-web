import * as React from 'react'

import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'

import FeedbacksPage from '../../../components/client/FeedbacksPage'

import Character from './Character'
import Delivery from './Delivery'
import Description from './Description'

export default function LabTabs(props) {
   const [value, setValue] = React.useState('1')

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <Box sx={{ width: '100%', margin: '200px 0px', typography: 'body1' }}>
         <TabContext value={value}>
            <Box sx={{ borderBottom: '1px solid  #CDCDCD' }}>
               <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  indicatorColor="secondary"
               >
                  <Tab style={styleTab} label="Описание" value="1" />
                  <Tab style={styleTab} label="Характеристики" value="2" />
                  <Tab style={styleTab} label="Отзывы" value="3" />
                  <Tab style={styleTab} label="Доставка и оплата" value="4" />
               </TabList>
            </Box>
            <TabPanel value="1">
               <Description
                  video={props.video}
                  name={props.name}
                  description={props.description}
               />
            </TabPanel>
            <TabPanel value="2">
               <Character character={props.character} />
            </TabPanel>
            <TabPanel value="3">
               <FeedbacksPage id={props.id} />
            </TabPanel>
            <TabPanel value="4">
               <Delivery />
            </TabPanel>
         </TabContext>
      </Box>
   )
}
const styleTab = {
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: '500',
   fontSize: '18px',
   lineHeight: '22px',
   color: '#292929',
}
