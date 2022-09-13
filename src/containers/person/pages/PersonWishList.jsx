import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import EmptyIcon from '../../../assets/images/notfound.png'
import Button from '../../../components/UI/Button'
import Card from '../../../components/UI/card/Card'
import { getAllProducts } from '../../../store/actions/wishListActions'

const PersonWishList = () => {
   const userId = useSelector((state) => state.auth.user.id)
   const { wishProducts } = useSelector((state) => state.wishProducts)

   const dispatch = useDispatch()
   useEffect(() => {
      if (userId) {
         dispatch(getAllProducts(userId))
      }
   }, [])
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
      </div>
   )
}

export default PersonWishList
const StyledBox = styled.div`
   .css-13xfq8m-MuiTabPanel-root {
      /* padding: 24px; */
      margin-bottom: 400px;
   }
   /* display: flex;
   justify-content: center; */
   padding: 42px 0px 0px 0px;
`

// const Styledh3 = styled.h3`
//    display: flex;
//    align-items: center;
//    width: 160px;
//    height: 33px;
//    font-style: normal;
//    font-weight: 500;
//    font-size: 30px;
//    color: #292929;
//    margin: 30px 0px 30px 0px;
// `
// const Horizontal = styled.div`
//    display: flex;
//    align-items: center;
//    width: 100%;
//    border: 1px solid #cdcdcd;
//    transform: rotate(180deg);
//    margin-bottom: 30px;
// `
// const ListClearButton = styled.div`
//    display: flex;
//    align-items: center;
//    cursor: pointer;
//    & p {
//       margin-left: 6px;
//       font-family: 'Inter';
//       font-style: normal;
//       font-weight: 400;
//       font-size: 14px;
//       line-height: 140%;
//       color: #384255;
//    }
// `

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
   /* gap: 15px; */
   padding: 30px 0px 0px 0px;
`