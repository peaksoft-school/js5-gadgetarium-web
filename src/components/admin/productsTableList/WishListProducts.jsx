import React, { useEffect, useState } from 'react'

import { format } from 'date-fns'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RingLoader } from 'react-spinners'
import styled from 'styled-components'

import { getProducts } from '../../../store/actions/products/productsActions'
import { STATUS } from '../../../utils/constants/constants'
import AppPagination from '../../UI/AppPagination'
import TableList from '../adminUI/TableList'

import Sorting from './subcomponents/Sorting'
import TwiceDatePickers from './subcomponents/TwiceDatePickers'

const override = {
   display: 'block',
   height: '100vh',
   margin: '150px auto 0 auto',
}

const WishListProducts = () => {
   const { products, loading, sizeOfProducts, totalPage } = useSelector(
      (state) => state.adminPanel
   )
   const [queryParams, setQueryParams] = useState({
      search: 'all',
      page: 1,
      size: 7,
      sort: null,
      startOfDate: null,
      finishOfDate: null,
      status: STATUS.WISH_LIST,
   })
   const navigate = useNavigate()

   const { allproducts } = products

   const dispatch = useDispatch()

   const onStartChange = (start) => {
      setQueryParams((prev) => {
         return {
            ...prev,
            startOfDate: format(start, 'yyyy-MM-dd'),
         }
      })
   }

   const onFinishChange = (end) => {
      setQueryParams((prev) => {
         return {
            ...prev,
            finishOfDate: format(end, 'yyyy-MM-dd'),
         }
      })
   }

   useEffect(() => {
      dispatch(getProducts(queryParams))
   }, [queryParams])

   const handleChangePage = (newPage) => {
      setQueryParams((prev) => {
         return {
            ...prev,
            page: newPage,
         }
      })
      window.scroll(0, 0)
   }

   const onNavigetToInnerPage = (id) => {
      navigate(`${id}`)
   }

   const onChangeHandler = (key, value) => {
      setQueryParams((prev) => {
         return {
            ...prev,
            [key]: value,
         }
      })
   }

   const columns = [
      {
         key: 'productId',
         header: 'ID',
         width: 40,
      },
      {
         key: 'image',
         header: 'Фото',
         width: 80,
         // eslint-disable-next-line react/no-unstable-nested-components
         cell: (item) => <TableImage src={item.image} alt={item.image} />,
      },
      { key: 'article', header: 'Артикул', width: 120 },
      { key: 'productName', header: 'Наименование товара', width: 200 },
      {
         key: 'createAt',
         header: 'Дата создания',
         width: 90,
      },
      {
         key: 'quantity',
         header: 'Кол-во товара',
         width: 100,
      },
      {
         key: 'priceWithDiscount',
         header: 'Цена товара',
         width: 100,
         // eslint-disable-next-line react/no-unstable-nested-components
         cell: (item) => (
            <div>
               <StyledPrice>{item.price}</StyledPrice>
               <StyledDiscount>{item.discount}%</StyledDiscount>
            </div>
         ),
      },
      {
         key: 'currentPrice',
         header: 'Текущая цена',
         width: 100,
         // eslint-disable-next-line react/no-unstable-nested-components
         cell: (item) => <StyledPrice>{item.currentPrice}</StyledPrice>,
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
               start={queryParams.startOfDate}
               finish={queryParams.finishOfDate}
               onStartChange={onStartChange}
               onFinishChange={onFinishChange}
            />
         </DatePickerContainer>
         <TopFunctionalContainer>
            <InfoParagraph>{`Найдено ${
               allproducts ? sizeOfProducts : 0
            } товаров`}</InfoParagraph>
            <Sorting onChange={onChangeHandler} />
         </TopFunctionalContainer>
         <TableListContainer>
            {allproducts ? (
               <>
                  <TableList
                     data={allproducts}
                     columns={columns}
                     onNavigetToInnerPage={onNavigetToInnerPage}
                  />
                  <AppPagination
                     totalPage={totalPage}
                     page={queryParams.page}
                     onChange={handleChangePage}
                  />
               </>
            ) : (
               <EmptyMessage>⚠️ Пока что товаров нет...</EmptyMessage>
            )}
         </TableListContainer>
      </Container>
   )
}

export default WishListProducts

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
const StyledPrice = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   color: #2c68f5;
`
const StyledDiscount = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   color: #f10000;
`
const TableImage = styled.img`
   width: 70px;
   height: 70px;
   object-fit: contain;
`
const EmptyMessage = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 80px;
   font-size: 18px;
`
