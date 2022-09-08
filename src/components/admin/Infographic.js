import * as React from 'react'

import styled from '@emotion/styled'
import { TabContext } from '@mui/lab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'

const data = {
   price: 7556,
   amount: 12,
   totalprice: '34 562',
   totalamount: 56,
}

const tabsArray = [
   {
      id: '1',
      label: 'За день',
      value: '1',
      currentPrice: 1200,
      previousPrice: 10000,
   },
   {
      id: '2',
      label: 'За месяц',
      value: '2',
      currentPrice: 12000,
      previousPrice: 10000,
   },
   {
      id: '3',
      label: 'За год',
      value: '3',
      currentPrice: 120000,
      previousPrice: 100500,
   },
]

export default function Infographic() {
   const [value, setValue] = React.useState('1')

   const handleChange = (SyntheticEvent, newValue) => {
      setValue(newValue)
   }
   return (
      <Box>
         <StyledTitle>Инфографика</StyledTitle>
         <BigCont>
            <div>
               <div>
                  <Price>
                     {data.price}
                     <span>С</span>
                  </Price>
                  <Descrip>Выкупили на сумму</Descrip>
               </div>
               <Amount>
                  {data.amount}
                  <span>шт</span>
               </Amount>
            </div>
            <Vertical />
            <div>
               <div>
                  <Price2>
                     {data.totalprice}
                     <span>С</span>
                  </Price2>
                  <Descrip2>Заказали на сумму</Descrip2>
               </div>
               <Amount2>
                  {data.totalamount}
                  <span>шт</span>
               </Amount2>
            </div>
         </BigCont>
         <TabContext value={value}>
            <StyledBox>
               <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
               >
                  {tabsArray.map((el) => (
                     <Tab key={el.id} label={el.label} value={el.value} />
                  ))}
               </TabList>
            </StyledBox>

            {tabsArray.map((el) => (
               <StyledTabPanel key={el.id} value={el.value}>
                  <StyledContainer>
                     <StyledTitle>Доставлено товаров на сумму</StyledTitle>
                     <InnerCont>
                        <div>
                           <CurrentPrice>{el.currentPrice} с</CurrentPrice>
                           <CurrentPeriod>Текущий период</CurrentPeriod>
                        </div>
                        <div>
                           <PrevPrice>{el.previousPrice} с</PrevPrice>
                           <PrevPeriod>Предыдущий период</PrevPeriod>
                        </div>
                     </InnerCont>
                  </StyledContainer>
               </StyledTabPanel>
            ))}
         </TabContext>
      </Box>
   )
}
const BigCont = styled.div`
   width: 330px;
   display: flex;
   justify-content: space-between;
`
const Price = styled.p`
   font-style: normal;
   font-weight: 500;
   font-size: 26px;
   line-height: 31px;
   letter-spacing: 1px;
   color: #1556de;
   margin: 0;

   & span {
      font-style: normal;
      font-weight: 500;
      font-size: 25px;
      line-height: 34px;
      letter-spacing: 1px;
      text-decoration-line: underline;
      text-decoration-thickness: 1px;
      text-transform: lowercase;
      color: #384255;
   }
`
const Vertical = styled.div`
   border-left: 1px solid #cdcdcd;
   transform: rotate(0deg);
   margin: 0;
`
const Descrip = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   letter-spacing: 1px;
   color: rgba(56, 66, 85, 0.7);
   margin: 0;
`
const Price2 = styled.p`
   font-style: normal;
   font-weight: 500;
   font-size: 26px;
   line-height: 31px;
   letter-spacing: 1px;
   color: #f99808;
   margin: 0;

   & span {
      font-style: normal;
      font-weight: 500;
      font-size: 25px;
      line-height: 34px;
      letter-spacing: 1px;
      text-decoration-line: underline;
      text-decoration-thickness: 1px;
      text-transform: lowercase;
      color: #384255;
   }
`

const Descrip2 = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   letter-spacing: 1px;
   color: rgba(56, 66, 85, 0.7);
   margin: 0;
`

const Amount = styled.p`
   font-style: normal;
   font-weight: 500;
   font-size: 22px;
   line-height: 27px;
   letter-spacing: 1px;
   color: #2c68f5;
   margin: 10px 0;
`
const Amount2 = styled.p`
   font-style: normal;
   font-weight: 500;
   font-size: 22px;
   line-height: 27px;
   letter-spacing: 1px;
   color: #f99808;
   margin: 10px 0;
`

const InnerCont = styled.div`
   display: flex;
   align-items: center;
   gap: 34px;
`
const CurrentPrice = styled.p`
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 29px;
   letter-spacing: 1px;
   color: #2fc509;
   margin: 0;
   white-space: nowrap;
`

const PrevPrice = styled.p`
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 19px;
   letter-spacing: 1px;
   color: #2fc509;
   margin: 0;
`

const CurrentPeriod = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 15px;
   letter-spacing: 1px;
   color: #384255;
   margin: 0;
`

const PrevPeriod = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 15px;
   letter-spacing: 1px;
   color: #384255;
   margin: 0;
`

const StyledBox = styled(Box)`
   .css-jpln7h-MuiTabs-scroller {
      border-bottom: 1px solid;
      border-color: rgba(0, 0, 0, 0.12);
   }
   .MuiTabs-indicator {
      background-color: #292929;
   }
   width: 330px;
   .css-1h9z7r5-MuiButtonBase-root-MuiTab-root {
      margin-left: 10px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #292929;
   }
   .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #292929;
   }
`
const StyledTabPanel = styled(TabPanel)`
   padding: 16px 0;
`
const StyledContainer = styled.div`
   width: 316px;
   height: 117px;
   padding: 14px;
   background: rgba(21, 86, 222, 0.09);
   border-radius: 8px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`
const StyledTitle = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 17px;
   letter-spacing: 1px;
   color: #384255;
`
