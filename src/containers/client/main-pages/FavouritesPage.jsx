import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux/es/exports'
import styled from 'styled-components'

import { ReactComponent as DeleteCompareList } from '../../../assets/icons/DeleteCompareList.svg'
import EmptyIcon from '../../../assets/images/notfound.png'
import IphoneImg from '../../../assets/images/Phone.png'
import Breadcrumbs from '../../../components/UI/Bredcrumbs'
import Button from '../../../components/UI/Button'
import Card from '../../../components/UI/card/Card'
import axiosInstance from '../../../config/axiosInstance'

const pathsArray = [
   {
      path: '/',
      name: 'Главная',
   },
   {
      path: '/favourites',
      name: 'Избранное',
   },
]
const data = [
   {
      id: 1,
      action: -10,
      img: IphoneImg,
      status: 'В наличии',
      title: 'Смартфон Apple iPhone 13 256gb',
      rating: 5,
      actualprice: 78000,
      noneactualprice: 80000,
   },
   {
      id: 2,
      action: -20,
      img: IphoneImg,
      status: 'В наличии',
      title: 'Смартфон Apple iPhone 13 256gb',
      rating: 2,
      actualprice: 78000,
      noneactualprice: 80000,
   },
   {
      id: 3,
      action: -10,
      img: IphoneImg,
      status: 'В наличии',
      title: 'Смартфон Apple iPhone 13 256gb',
      rating: 3,
      actualprice: 78000,
      noneactualprice: 80000,
   },
   {
      id: 4,
      action: -10,
      img: IphoneImg,
      status: 'В наличии',
      title: 'Смартфон Apple iPhone 13 256gb',
      rating: 4,
      actualprice: 78000,
      noneactualprice: 80000,
   },
   {
      id: 5,
      action: -10,
      img: IphoneImg,
      status: 'В наличии',
      title: 'Смартфон Apple iPhone 13 256gb',
      rating: 5,
      actualprice: 78000,
      noneactualprice: 80000,
   },
]

const FavouritesPage = () => {
   const [arr, setarr] = useState([])
   const userid = useSelector((store) => store)
   console.log(userid, arr)
   const getarr = async (id) => {
      const getdata = await axiosInstance.get(`api/user/wishlist/${id || 1}`)
      setarr(getdata)
   }
   useEffect(() => {
      getarr()
   }, [])
   return (
      <>
         <Breadcrumbs paths={pathsArray} />
         <Styledh3>Избранное</Styledh3>
         <Horizontal />

         {data.length > 0 ? (
            <>
               <ListClear>
                  <DeleteCompareList />
                  <p>Oчистить список товаров</p>
               </ListClear>

               <StyledCard>
                  {data.map((data) => {
                     return (
                        <div key={data.id}>
                           <Card
                              id={data.id}
                              action={data.action}
                              img={data.img}
                              status={data.status}
                              title={data.title}
                              rating={data.rating}
                              actualprice={data.actualprice}
                              noneactualprice={data.noneactualprice}
                           />
                        </div>
                     )
                  })}
               </StyledCard>
               <StyledBox>
                  <Button variant="outlined" width="180px" height="41px">
                     Продолжить покупки
                  </Button>
               </StyledBox>
            </>
         ) : (
            <StyledBlock>
               <StyledComponent>
                  <StyledEmptyIcon src={EmptyIcon} />
                  <StyledF2>В ИЗБРАННОМ ПОКА ПУСТО</StyledF2>
                  <StyledText>
                     Воспользуйтесь поиском или каталогом, выберите нужные
                     товары и добавьте их в избранное!
                  </StyledText>
                  <Button variant="outlined" width="180px" height="41px">
                     К покупкам
                  </Button>
               </StyledComponent>
            </StyledBlock>
         )}
      </>
   )
}

export default FavouritesPage
const StyledBox = styled.div`
   display: flex;
   justify-content: center;
   padding: 42px 0px 0px 0px;
`

const Styledh3 = styled.h3`
   display: flex;
   align-items: center;
   width: 160px;
   height: 33px;
   font-style: normal;
   font-weight: 500;
   font-size: 30px;
   color: #292929;
   margin: 30px 0px 30px 0px;
`
const Horizontal = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   border: 1px solid #cdcdcd;
   transform: rotate(180deg);
   margin-bottom: 30px;
`
const ListClear = styled.div`
   display: flex;
   align-items: center;
   cursor: pointer;
   & p {
      margin-left: 6px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      color: #384255;
   }
`

const StyledBlock = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   padding: 120px 0px 120px 0px;
`
const StyledComponent = styled.div`
   width: 466px;
   height: 500px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
`
const StyledEmptyIcon = styled('img')`
   width: 300px;
`
const StyledF2 = styled.h2`
   font-style: normal;
   font-weight: 500;
   font-size: 24px;
   line-height: 110%;
   display: flex;
   align-items: flex-end;
   text-transform: capitalize;
   color: #292929;
`
const StyledText = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 130%;
   display: flex;
   align-items: flex-end;
   text-align: center;
   color: #292929;
`
const StyledCard = styled.div`
   display: flex;
   flex-direction: row;
   gap: 15px;
   padding: 30px 0px 0px 0px;
`
