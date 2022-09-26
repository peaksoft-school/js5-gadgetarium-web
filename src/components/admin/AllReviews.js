import { useEffect } from 'react'

import { styled } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'

import { getReviews } from '../../store/actions/adminReviewAction'

import RenderRevies from './RenderRevies'

const AllReviews = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getReviews())
   }, [])

   const { feedbacks } = useSelector((state) => state.adminFeedbacks)

   return (
      <ComponentContainer>
         <Container>
            <Topic>
               <p>ID</p>
               <Content>Фото</Content>
               <Contents>Название товара</Contents>
               <Contents>Комментарий</Contents>
            </Topic>
            <Text>
               <Popup>
                  <p> Oценки </p>
               </Popup>
               <p>Пользователь</p>
            </Text>
         </Container>
         {feedbacks.map((el) =>
            el.map((el) => (
               <RenderRevies
                  adminResponse={el.adminResponse}
                  status={el.status}
                  key={el.id}
                  id={el.id}
                  productImage={el.productImage}
                  productId={el.productId}
                  name={el.name}
                  model={el.model}
                  vendorCode={el.vendorCode}
                  comment={el.comment}
                  fullName={el.fullName}
                  email={el.email}
                  localDateTime={el.localDateTime}
                  average={el.average}
               />
            ))
         )}
      </ComponentContainer>
   )
}

export default AllReviews
const ComponentContainer = styled('div')`
   width: 900px;
   margin: auto;
`
const Container = styled('div')`
   display: flex;
   justify-content: space-between;
   padding: 30px 0px 10px 0px;
   border-bottom: 1px solid #cdcdcd;
   position: relative;
`
const Topic = styled('div')`
   width: 480px;
   display: flex;
   p {
      font-weight: 600px;
      font-size: 14px;
      line-height: 110%;
      color: #384255;
   }
   p:last-of-type {
      margin-left: 25px;
   }
`
const Text = styled('div')`
   width: 400px;
   display: flex;
   p {
      font-weight: 600px;
      font-style: normal;
      font-size: 14px;
      line-height: 17px;
      color: #384255;
   }
   position: absolute;
   right: 0;
   img {
      margin-right: 50px;
   }
`
const Content = styled('p')`
   margin-left: 15px;
`
const Contents = styled('p')`
   margin-left: 40px;
`

const Popup = styled('div')`
   width: 165px;
   display: flex;
   justify-content: space-between;
   p {
      margin-left: 20px;
   }
`
