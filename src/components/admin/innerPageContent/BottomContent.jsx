import * as React from 'react'

import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import styled from 'styled-components'

import { ReactComponent as Document } from '../../../assets/icons/Document.svg'

import AboutBlock from './innerPageComponents/AboutBlock'
import CharactersBlock from './innerPageComponents/CharactersBlock'

export default function BottomContent({ data }) {
   const [value, setValue] = React.useState('1')

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <Box
         sx={{
            width: '100%',
            margin: '120px 0px',
            typography: 'body1',
         }}
      >
         <TabContext value={value}>
            <Box
               sx={{
                  borderBottom: '1px solid  #CDCDCD',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
               }}
            >
               <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  indicatorColor="secondary"
               >
                  <Tab style={styleTab} label="Описание" value="1" />
                  <Tab style={styleTab} label="Характеристики" value="2" />
                  <Tab style={styleTab} label="Отзывы" value="3" />
               </TabList>
               <DownloadDocument>
                  <Document />
                  <a href={data?.pdf || '#'}>Скачать документ.pdf</a>
               </DownloadDocument>
            </Box>
            <TabPanel value="1">
               <AboutBlock
                  description={data?.description}
                  videoReview={data?.videoReview}
               />
            </TabPanel>
            <TabPanel value="2">
               <CharactersBlock />
            </TabPanel>
            <TabPanel value="3">Отзывы</TabPanel>
         </TabContext>
      </Box>
   )
}
const styleTab = {
   fontFamily: 'Inter',
   fontStyle: 'normal',
   textTransform: 'none',
   fontWeight: '500',
   fontSize: '18px',
   lineHeight: '22px',
   color: '#292929',
}

const DownloadDocument = styled.div`
   cursor: pointer;
   display: flex;
   gap: 10px;
   align-items: center;
   & a {
      text-decoration: none;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: #384255;
   }
`
