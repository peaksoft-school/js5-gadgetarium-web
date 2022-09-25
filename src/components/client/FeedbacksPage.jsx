import { React, useEffect, useState } from 'react'

import { InputLabel, Rating } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import userAvatar from '../../assets/images/avatar.png'
import {
   getAllFeedbacks,
   leaveFeedback,
   getFeedbackRatings,
} from '../../store/slices/feedbackSlice'
import Button from '../UI/Button'
import ImagePicker from '../UI/ImagePickerForFeedback'

import FeedbackStars from './FeedbackStars'

const FeedbacksPage = ({ id }) => {
   const { userFeedbacks } = useSelector((state) => state.feedback.feedbacks)
   const { jwt } = useSelector((state) => state.auth.user)
   const [files, setFiles] = useState([])
   const [comment, setComment] = useState('')
   const [rating, setRating] = useState(null)
   const dispatch = useDispatch()

   const setStars = (e) => {
      const { value } = e.target
      setRating(value)
   }

   const feedbackData = {
      comment,
      rating,
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log('submit')
      if (files.length > 0 && rating && comment) {
         dispatch(leaveFeedback({ feedbackData, files, id }))
         setFiles([])
         setComment('')
         setRating(null)
      }
   }

   useEffect(() => {
      if (id) {
         dispatch(getAllFeedbacks(id))
         dispatch(getFeedbackRatings(id))
      }
   }, [])

   return (
      <StyledDiv>
         <Feedback>Отзывы</Feedback>
         <AllFeedbacks>
            <Feedbacks>
               {userFeedbacks.map((item) => {
                  return (
                     <div key={item.id}>
                        <Img src={userAvatar} alt="user" />
                        <UsersDiv>
                           <h5>{item.fullName}</h5>
                           <span>{item.localDateTime}</span>
                        </UsersDiv>
                        <ReviewsCont>
                           <h3> Оценка </h3>
                           <Rating readOnly value={item.stars} size="small" />
                        </ReviewsCont>
                        <StyledText>
                           <p>{item.comment}</p>
                        </StyledText>
                        {item.adminResponse && (
                           <StyledCont>
                              <h5>Ответ от представителя</h5>
                              <AdminResponseTitle>
                                 {item.adminResponse}
                              </AdminResponseTitle>
                           </StyledCont>
                        )}
                        <Border />
                     </div>
                  )
               })}
            </Feedbacks>
            <FeedbackStars />
         </AllFeedbacks>
         <LeaveFeedback>
            {jwt ? (
               <>
                  <Feedback>Оставьте свой отзыв</Feedback>
                  <SetRating>
                     Оценка
                     <Rating onChange={setStars} value={rating} />
                  </SetRating>
                  <DescriptionBlock>
                     <InputLabel>Ваш комментарий</InputLabel>
                     <Textarea
                        onChange={(e) => setComment(e.target.value)}
                        type="text"
                        value={comment}
                        placeholder="Напишите сообщение"
                        name="comment"
                     />
                  </DescriptionBlock>
                  <ImagePickerBlock>
                     <ImagePicker
                        getPhoto={setFiles}
                        allPhotos={files}
                        width="570px"
                        height="120px"
                     />
                  </ImagePickerBlock>
                  <Button
                     variant="contained"
                     width="570px"
                     height="47px"
                     onClick={handleSubmit}
                  >
                     Отправить отзыв
                  </Button>
               </>
            ) : (
               <AuthorizeMessage>
                  ⚠️ Авторизуйтесь чтобы оставить свой отзыв
               </AuthorizeMessage>
            )}
         </LeaveFeedback>
      </StyledDiv>
   )
}

export default FeedbacksPage

const StyledDiv = styled.div`
   margin-left: 20px;
   margin-top: 2%;
   width: 60%;
   h5 {
      height: 18px;
   }
   p {
      font-size: 16px;
      line-height: 150%;
      color: #384255;
   }
`

const Feedback = styled.h1`
   height: 30px;
`

const UsersDiv = styled.div`
   margin-left: 65px;
   margin-top: -50px;
   height: 30px;
   span {
      margin-top: 0.5%;
      font-family: 'Inter';
      font-size: 14px;
      flex: none;
      color: rgba(0, 0, 0, 0.5);
   }
`

const Img = styled.img`
   width: 50px;
   height: 50px;
   margin-top: 1rem;
   border-radius: 30px;
`
const ReviewsCont = styled.div`
   display: flex;
   align-items: center;
   flex-direction: row;
   gap: 10px;
   align-items: center;
   width: 270px;
   margin-left: 63px;
   margin-top: 30px;
`
const StyledText = styled.div`
   margin-top: 20px;
   margin-left: 65px;
   display: block;
`
const StyledCont = styled.div`
   display: block;
   padding: 20px;
   margin-left: 65px;
   width: 825px;
   height: 112px;
   background: #e8e8e8;
   border-radius: 6px;
`
const Border = styled.div`
   width: 890px;
   height: 0px;
   border: 1px solid #e8e8e8;
   margin-top: 2%;
`
const Feedbacks = styled.div`
   margin-top: 3rem;
   margin-bottom: 15rem;
`
const LeaveFeedback = styled.div`
   display: flex;
   flex-direction: column;
`
const SetRating = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   margin: 38px 0 38px 0;
`
const DescriptionBlock = styled.div`
   /* margin-bottom: 12px; */
`

const Textarea = styled.textarea`
   width: 570px;
   height: 150px;
   border-radius: 6px;
   padding: 10px 0px 0px 10px;
   margin-bottom: 15px;
`
const AllFeedbacks = styled.div`
   display: flex;
`
const ImagePickerBlock = styled.div``

const AuthorizeMessage = styled.div`
   display: flex;
   justify-content: center;
   font-size: 20px;
`

const AdminResponseTitle = styled.p`
   font-size: 16px;
   line-height: 150%;
   color: #384255;
   margin: 10px;
`
