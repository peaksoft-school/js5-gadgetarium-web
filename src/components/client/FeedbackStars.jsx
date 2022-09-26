import { Rating } from '@mui/material'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import Button from '../UI/Button'

const FeedbackStars = () => {
   const { feedbackRating } = useSelector((state) => state.feedback)
   return (
      <Stars>
         <StyledDiv>
            <h1>{feedbackRating.avg}</h1>
            <Rating readOnly value={feedbackRating.avg} />
            <AllFeedback>
               <ul>
                  <li>
                     <Rating readOnly value={5} />
                  </li>
                  <li>
                     <Rating readOnly value={4} />
                  </li>
                  <li>
                     <Rating readOnly value={3} />
                  </li>
                  <li>
                     <Rating readOnly value={2} />
                  </li>
                  <li>
                     <Rating readOnly value={1} />
                  </li>
               </ul>
               <ul style={{ gap: '13px' }}>
                  <li>{feedbackRating.five} отзывов</li>
                  <li>{feedbackRating.four} отзывов</li>
                  <li>{feedbackRating.three} отзывов</li>
                  <li>{feedbackRating.two} отзывов</li>
                  <li>{feedbackRating.one} отзывов</li>
               </ul>
            </AllFeedback>
         </StyledDiv>
         <AllFeedbacks>{feedbackRating.sum} отзывов</AllFeedbacks>
         <Button
            variant="contained"
            width="390px"
            height="47px"
            onClick={() => window.scrollTo(0, 1630)}
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
   padding-bottom: 0px;
   height: 300px;
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
   margin-bottom: 10px;
   & ul {
      display: flex;
      flex-direction: column;
      gap: 5px;
   }
   & li {
      margin-left: 10px;
      white-space: nowrap;
   }
`
const AllFeedbacks = styled.div`
   display: block;
   width: 30%;
   height: 55%;
   color: #91969e;
`
