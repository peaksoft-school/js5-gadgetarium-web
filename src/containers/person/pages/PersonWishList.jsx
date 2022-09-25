import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import EmptyIcon from '../../../assets/images/notfound.png'
import Button from '../../../components/UI/Button'
import Card from '../../../components/UI/card/Card'
import { getUserWishList } from '../../../store/actions/wishListActions'
import Main from '../../client/main-pages/Main'

const PersonWishList = () => {
   const userId = useSelector((state) => state.auth.user.id)
   const { wishProducts } = useSelector((state) => state.wishProducts)

   const navigate = useNavigate()
   const dispatch = useDispatch()
   useEffect(() => {
      if (userId) {
         dispatch(getUserWishList(userId))
      }
   }, [])

   const navigateMain = () => {
      dispatch(Main())
      navigate('/')
   }
   return (
      <div>
         {wishProducts.length > 0 ? (
            <>
               <StyledCard>
                  {wishProducts.map((data) => {
                     return (
                        <div key={data.id}>
                           <Card
                              id={data.id}
                              action={data.discount}
                              img={data.image}
                              status={data.stock}
                              title={data.model}
                              rating={data.average}
                              actualprice={data.afterDiscount}
                              noneactualprice={data.beforeDiscount}
                           />
                        </div>
                     )
                  })}
               </StyledCard>
               <StyledBox>
                  <Button
                     variant="outlined"
                     width="180px"
                     height="41px"
                     onClick={navigateMain}
                  >
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
                  {/* <StyledBoxButton> */}
                  <Button
                     variant="outlined"
                     width="180px"
                     height="41px"
                     onClick={navigateMain}
                  >
                     К покупкам
                  </Button>
               </StyledComponent>
            </StyledBlock>
         )}
      </div>
   )
}

export default PersonWishList
const StyledBox = styled.div`
   .css-13xfq8m-MuiTabPanel-root {
      margin-bottom: 400px;
   }
   padding: 42px 0px 0px 0px;
   display: flex;
   justify-content: center;
`

const StyledBlock = styled.div`
   width: 1300px;
   text-align: center;
   margin: 10px auto;
   display: flex;
   justify-content: center;
   padding: 120px 0px;
`
const StyledComponent = styled.div`
   width: 466px;
   height: 500px;
   margin-left: 300px;
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
   padding: 30px 0px 0px 0px;
`
