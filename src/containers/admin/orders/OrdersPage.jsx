import React, { useState } from 'react'

import { IconButton } from '@mui/material'
import styled from 'styled-components'

import { ReactComponent as SearchIcon } from '../../../assets/icons/searchIcon.svg'
import Infographic from '../../../components/admin/adminUI/Infographic'
import OrdersTableList from '../../../components/admin/ordersTableList/OrdersTableList'
import Tab from '../../../components/UI/Tab'
import { ORDERS_STATUS } from '../../../utils/constants/constants'

const OrdersPage = () => {
   const tabsArray = [
      {
         id: 1,
         value: 'В ожидании',
         label: 'В ожидании',
         Component: <OrdersTableList orderType={ORDERS_STATUS.PENDING} />,
      },
      {
         id: 2,
         value: 'Готов к выдаче',
         label: 'Готов к выдаче',
         Component: <OrdersTableList orderType={ORDERS_STATUS.READY_FOR} />,
      },
      {
         id: 3,
         value: 'Курьер в пути',
         label: 'Курьер в пути',
         Component: <OrdersTableList orderType={ORDERS_STATUS.ON_THE_WAY} />,
      },
      {
         id: 4,
         value: 'Доставлены',
         label: 'Доставлены',
         Component: <OrdersTableList orderType={ORDERS_STATUS.DELIVERED} />,
      },
      {
         id: 5,
         value: 'Получены',
         label: 'Получены',
         Component: <OrdersTableList orderType={ORDERS_STATUS.RECEIVED} />,
      },
      {
         id: 6,
         value: 'Отменены',
         label: 'Отменены',
         Component: <OrdersTableList orderType={ORDERS_STATUS.CANCEL} />,
      },
   ]
   const [search, setSearch] = useState('')
   return (
      <Container>
         <FirsContentContainer>
            <TopContentContainer>
               <SearchContainer>
                  <SearchInput
                     placeholder="Поиск по артикулу или..."
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                  />
                  <IconButton>
                     <SearchIcon />
                  </IconButton>
               </SearchContainer>
               <div> </div>
            </TopContentContainer>
            <TabContainer>
               <Tab
                  baseValue="В ожидании"
                  variant="pink"
                  tabsArray={tabsArray}
               />
            </TabContainer>
         </FirsContentContainer>
         <SecondContentContainer>
            <Infographic />
         </SecondContentContainer>
      </Container>
   )
}

export default OrdersPage

const SearchContainer = styled.div`
   border: 1px solid #cdcdcd;
   border-radius: 10px;
   display: flex;
   align-items: center;
   :focus {
      border: 1px solid white;
      outline: none;
   }

   svg {
      margin-right: 10px;
   }
`

const SearchInput = styled.input`
   width: 450px;
   height: 40px;
   background: transparent;
   padding: 10px 18px;
   border: none;
   :focus {
      border: 1x solid white;
      outline: none;
   }
   ::placeholder {
      color: #91969e;
   }
`
const Container = styled.div`
   display: flex;
   justify-content: space-between;
`
const FirsContentContainer = styled.div`
   width: 80%;
   padding-right: 60px;
`
const TopContentContainer = styled.div`
   display: flex;
   justify-content: space-between;
`
const SecondContentContainer = styled.div`
   width: 22%;
`
const TabContainer = styled.div`
   margin-top: 40px;
`
