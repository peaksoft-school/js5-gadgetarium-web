import { useEffect } from 'react'

import { Rating } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { getFeedbackRatings } from '../../store/slices/feedbackSlice'
import Button from '../UI/Button'

const FeedbackStars = () => {
   const { feedbackRating } = useSelector((state) => state.feedback)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getFeedbackRatings())
   }, [])
   const submitHandler = (e) => {
      e.preventDefault()
   }
   return (
      <Stars>
         <StyledDiv>
            <h1>{feedbackRating.avg}</h1>
            <Rating readOnly value={feedbackRating.avg} />
            <AllFeedback>
               <ul>
                  <Rating readOnly value={5} />
                  <Rating readOnly value={4} />
                  <Rating readOnly value={3} />
                  <Rating readOnly value={2} />
                  <Rating readOnly value={1} />
               </ul>
               <ul>
                  <li>{feedbackRating.one} отзывов</li>
                  <li>{feedbackRating.two} отзывов</li>
                  <li>{feedbackRating.three}отзывов</li>
                  <li>{feedbackRating.four} отзывов</li>
                  <li>{feedbackRating.five} отзывов</li>
               </ul>
            </AllFeedback>
         </StyledDiv>
         <AllFeedbacks>{feedbackRating.sum} отзывов</AllFeedbacks>
         <Button
            variant="contained"
            width="390px"
            height="47px"
            onClick={submitHandler}
         >
            Оставить отзыв
         </Button>
      </Stars>
   )
}

export default FeedbackStars

const Stars = styled.div`
   margin-left: 10%;
   margin-top: -3%;
   display: block;
   padding: 20px;
   width: 429px;
   height: 223px;
   background: #e8e8e8;
   border-radius: 6px;
   & h1 {
      margin-top: -7px;
   }
`

const StyledDiv = styled.div`
   display: flex;
   width: 170px;
   height: 39px;
`
const AllFeedback = styled.div`
   display: flex;
   margin-left: 15px;
   margin-top: -7px;
   width: 245px;
   height: 140px;
   & ul {
      width: 130px;
      height: 140px;
      margin-left: -2%;
   }
   & li {
      list-style: none;
      margin-left: -0px;
      line-height: 170%;
   }
`
const AllFeedbacks = styled.div`
   display: block;
   width: 30%;
   height: 55%;
   color: #91969e;
`
