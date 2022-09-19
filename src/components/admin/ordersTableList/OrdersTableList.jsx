import React, { useEffect, useState } from 'react'

import { IconButton } from '@mui/material'
import { format } from 'date-fns'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RingLoader } from 'react-spinners'
import styled from 'styled-components'

import { ReactComponent as DeleteIcon } from '../../../assets/icons/deleteIcon.svg'
import { deleteOrderById, getOrders } from '../../../store/actions/orderActions'
import AppPagination from '../../UI/AppPagination'
import PopUpMenu from '../adminUI/PopUpMenu'
import TableList from '../adminUI/TableList'
import TwiceDatePickers from '../productsTableList/subcomponents/TwiceDatePickers'

const override = {
   display: 'block',
   margin: '150px auto 0 auto',
}

const OrdersTableList = ({ orderType }) => {
   const { orders, loading, sizeOfProducts, totalPage } = useSelector(
      (state) => state.orders
   )
   const [queryParams, setQueryParams] = useState({
      search: 'all',
      page: 1,
      size: 5,
      dateOfStart: null,
      dateOfFinish: null,
      status: orderType,
   })
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const onStartChange = (start) => {
      setQueryParams((prev) => {
         return {
            ...prev,
            dateOfStart: format(start, 'yyyy-MM-dd'),
         }
      })
   }

   const onFinishChange = (end) => {
      setQueryParams((prev) => {
         return {
            ...prev,
            dateOfFinish: format(end, 'yyyy-MM-dd'),
         }
      })
   }

   useEffect(() => {
      dispatch(getOrders(queryParams))
   }, [
      queryParams.dateOfFinish,
      queryParams.page,
      queryParams.search,
      queryParams.dateOfStart,
      queryParams.status,
   ])

   const handleChangePage = (newPage) => {
      setQueryParams((prev) => {
         return {
            ...prev,
            page: newPage,
         }
      })
      window.scroll(0, 0)
   }

   const handleDelete = (e, id) => {
      e.stopPropagation()
      // eslint-disable-next-line no-alert
      if (window.confirm('Вы хотите удалить этот заказ?')) {
         dispatch(deleteOrderById(id))
      }
   }

   const onNavigetToInnerPage = (id) => {
      navigate(`${id}`)
   }

   const columns = [
      {
         key: 'userId',
         header: 'ID',
         width: 40,
      },
      { key: 'userName', header: 'ФИО', width: 100 },
      {
         key: 'Number',
         header: 'Номер/дата',
         width: 120,
      },
      {
         key: 'quantity',
         header: 'Кол-во',
         width: 80,
      },
      {
         key: 'amounPrice',
         header: 'Общая сумма',
         width: 100,
      },
      {
         key: 'orderType',
         header: 'Оформление заказа',
         width: 100,
      },
      {
         key: 'status',
         header: 'Cтатус',
         width: 100,
         // eslint-disable-next-line react/no-unstable-nested-components
         cell: () => {
            return <PopUpMenu payment="Наличные" />
         },
      },
      {
         key: 'actions',
         header: 'Действия',
         width: 100,
         // eslint-disable-next-line react/no-unstable-nested-components
         cell: (item) => {
            return (
               <ActionContainer>
                  <IconButton onClick={(e) => handleDelete(e, item.productId)}>
                     <DeleteIcon />
                  </IconButton>
               </ActionContainer>
            )
         },
      },
   ]

   if (loading) {
      return (
         <RingLoader
            color="#cb11ab"
            cssOverride={override}
            speedMultiplier={1.2}
            size={120}
         />
      )
   }

   return (
      <Container>
         <hr />
         <DatePickerContainer>
            <TwiceDatePickers
               start={queryParams.dateOfStart}
               finish={queryParams.dateOfFinish}
               onStartChange={onStartChange}
               onFinishChange={onFinishChange}
            />
         </DatePickerContainer>
         <TopFunctionalContainer>
            <InfoParagraph>{`Найдено ${
               orders.length === 0 ? 0 : sizeOfProducts
            } товаров`}</InfoParagraph>
         </TopFunctionalContainer>
         {orders.length === 0 ? (
            <EmptyMessage> ⚠️ Пока что заказов нет...</EmptyMessage>
         ) : (
            <TableListContainer>
               <TableList
                  data={orders}
                  columns={columns}
                  onNavigetToInnerPage={onNavigetToInnerPage}
               />
               <AppPagination
                  totalPage={totalPage}
                  page={queryParams.page}
                  onChange={handleChangePage}
               />
            </TableListContainer>
         )}
      </Container>
   )
}

export default OrdersTableList

const Container = styled.div`
   hr {
      margin-bottom: 30px;
      border: 1px solid #cdcdcd;
   }
`
const DatePickerContainer = styled.div`
   display: flex;
   justify-content: flex-start;
   gap: 20px;
`
const TopFunctionalContainer = styled.div`
   margin-top: 40px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const InfoParagraph = styled.p`
   font-weight: 400;
   font-size: 14px;
   color: #384255;
`
const TableListContainer = styled.div`
   margin-top: 16px;
`
const ActionContainer = styled.div`
   display: flex;
   gap: 12px;

   svg {
      cursor: pointer;
   }
`
const EmptyMessage = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 80px;
   font-size: 18px;
`
