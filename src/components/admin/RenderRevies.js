/* eslint-disable max-len */
/* eslint-disable import/no-useless-path-segments */
import React, { useState } from 'react'

import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'

import CheckVector from '../../assets/icons/CheckVector.svg'
import GroupIcon from '../../assets/icons/GroupIcon.svg'
import VectorCheck from '../../assets/icons/VectorCheck.svg'
import VectorDelete from '../../assets/icons/VectorDelete.svg'
// import { readAction } from '../../store/actions/adminReviewAction'
import {
   deleteReview,
   postReviews,
} from '../../store/actions/adminReviewAction'
import Rating from '../admin/Rating'
import Button from '../UI/Button'

function RenderRevies(props) {
   const { id } = props
   const dispatch = useDispatch()
   const [show, setShow] = useState({ que: false })
   const [seeMore, setSeeMore] = useState(false)
   const [isEdit, setIsEdit] = useState(false)
   const [saveOrCancel, setsaveOrCancel] = useState(true)
   const [value, setValue] = useState(props.adminResponse)

   const showHandler = () => {
      setShow({ ...show, que: !show.que })
      setSeeMore(!seeMore)
      if (props.adminResponse !== null) {
         setIsEdit(true)
      }
      // dispatch(readAction(props.id))
   }
   const changeHandler = (e) => {
      setValue(e.target.value)
   }
   const sendMassageHandler = () => {
      setsaveOrCancel(!saveOrCancel)
      setIsEdit(false)
   }

   const answerChangeHandler = () => {
      if (value !== '') {
         dispatch(postReviews({ id, value }))
      }
   }

   const saveChangeHandler = () => {
      dispatch(postReviews({ id, value }))
      setsaveOrCancel(true)
      setIsEdit(true)
   }
   const cancelEditHandler = () => {
      setsaveOrCancel(true)
      setIsEdit(true)
   }

   const deleteChangeHandler = (event) => {
      dispatch(deleteReview(id))
      event.stopPropagation()
   }
   return (
      <WrapperRevies>
         <Topic>
            <p>{id}</p>
            <Foto>
               <Img src={props.productImage} alt="" />
            </Foto>
            <Model>
               <b>{props.model}</b>
               <p>{props.name}</p>
               <p>{props.vendorCode}</p>
            </Model>
         </Topic>
         <Review isBold={props.status}>
            <span>
               {seeMore ? (
                  <span>{props.comment}</span>
               ) : (
                  <span>{props.comment.trim().slice(0, 90).concat('...')}</span>
               )}
            </span>
            <p>{props.localDateTime}</p>
            {show.que && (
               <WrapperPhotos>
                  <ImgComment src={props.productImage} alt="" />
                  <ImgComment src={props.productImage} alt="" />
                  <ImgComment src={props.productImage} alt="" />
               </WrapperPhotos>
            )}
         </Review>

         <UserContainer>
            <UserGroup>
               <div>
                  <Rating defaultValue={props.average} />
               </div>
               <Div>
                  <img
                     style={{ width: '40px', height: '40px' }}
                     src={GroupIcon}
                     alt=""
                  />
                  <div>
                     <b>{props.fullName}</b>
                     <p>{props.email}</p>
                  </div>
                  <WrapperIcons>
                     <img
                        src={VectorDelete}
                        alt=""
                        onClick={deleteChangeHandler}
                     />
                     <div role="button" tabIndex={0} onClick={showHandler}>
                        {!show.que && <img src={VectorCheck} alt="" />}
                        {show.que && <img src={CheckVector} alt="" />}
                     </div>
                  </WrapperIcons>
               </Div>
            </UserGroup>
            {show.que && (
               <DivBlock>
                  <label htmlFor="text"> Ответить на комментарий</label>
                  <Textarea
                     disabled={isEdit}
                     type="text"
                     value={value}
                     onChange={changeHandler}
                  />
                  {saveOrCancel ? (
                     <>
                        {' '}
                        {props.adminResponse === null ? (
                           <Button
                              variant="contained"
                              width="160px"
                              height="43px"
                              onClick={answerChangeHandler}
                           >
                              Ответить
                           </Button>
                        ) : (
                           <Button
                              variant="contained"
                              width="170px"
                              height="43"
                              onClick={sendMassageHandler}
                           >
                              Редактировать
                           </Button>
                        )}
                     </>
                  ) : (
                     <WrapperLastButton>
                        <Button variant="outlined" onClick={cancelEditHandler}>
                           Отменить
                        </Button>
                        <Button variant="contained" onClick={saveChangeHandler}>
                           Сохранить
                        </Button>
                     </WrapperLastButton>
                  )}
               </DivBlock>
            )}
         </UserContainer>
      </WrapperRevies>
   )
}

export default RenderRevies
const Topic = styled('div')`
   width: 480px;
   display: flex;
   p {
      font-weight: 600px;
      font-size: 14px;
      line-height: 110%;
      color: #384255;
   }
`
const WrapperLastButton = styled('span')`
   display: flex;
   justify-content: space-between;
   button {
      margin: 0;
   }
`
const WrapperPhotos = styled('div')`
   display: flex;
   margin-top: 10px;
   width: 200px;
   height: 60px;
`
const WrapperIcons = styled('div')`
   display: flex;
`
const WrapperRevies = styled('div')`
   width: 920px;
   display: flex;
   justify-content: space-between;
   margin-bottom: 30px;
   margin-top: 10px;
`
const UserContainer = styled('div')`
   display: flex;
   flex-direction: column;
`

const Model = styled('div')`
   width: 120px;
   margin-left: 22px;
   p {
      color: #384255;
   }
`
const Review = styled('div')`
   width: 600px;
   overflow-wrap: break-word;
   margin-left: 20px;
   span {
      font-weight: ${(props) => (props.isBold === 'READ' ? 400 : 600)};
      font-size: 14px;
      font-style: normal;
      line-height: 21px;
      overflow-wrap: break-word;
   }
   p {
      color: rgba(0, 0, 0, 0.5);
      margin-top: 5px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
   }
`
const Foto = styled('div')`
   margin-left: 20px;
   width: 56px;
   height: 62px;
`
const UserGroup = styled('div')`
   width: 400px;
   margin-left: 20px;
   display: flex;
   justify-content: space-between;
`
const Div = styled('div')`
   display: flex;
   div {
      padding: 10px;
   }
`
const Textarea = styled('textarea')`
   width: 380px;
   height: 130px;
   border-radius: 4px;
   padding: 10px 10px;
`
const DivBlock = styled('div')`
   margin: 0 20px 40px 20px;
   button {
      margin-left: 208px;
      width: 170px;
   }
`
const Img = styled('img')`
   width: 100%;
   height: 100%;
   object-fit: cover;
`
const ImgComment = styled('img')`
   width: 100%;
   height: 100%;
   object-fit: cover;
   margin: 0 10px 0 0;
`
