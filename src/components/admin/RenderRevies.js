import React, { useState } from 'react'

import styled from '@emotion/styled'

import CheckVector from '../../assets/icons/CheckVector.svg'
import GroupIcon from '../../assets/icons/GroupIcon.svg'
import Image from '../../assets/icons/Rectangle 6269.svg'
import Starrrr from '../../assets/icons/Starrrr.svg'
import VectorCheck from '../../assets/icons/VectorCheck.svg'
import VectorDelete from '../../assets/icons/VectorDelete.svg'
import Button from '../UI/Button'

function RenderRevies() {
   const [show, setShow] = useState({ que: false })
   const [isBoldShow, setisBoldShow] = useState(false)
   //    const [allFeedbacks, setAllFeedbacks] = useState({
   //       productImage,
   //       name,
   //       model,
   //       vendorCode,
   //       adminResponse,
   //       comment,
   //    })

   const showHandler = () => {
      setShow({ ...show, que: !show.que })
      setisBoldShow(true)
   }

   const text =
      'These lines dont work because any text without quotes around it is assumed to be a variable name, property name, a reserved word, or similar. If the browser cant find it, then an error is raised (e.g. missing; before statement"). If the browser can see where a string starts, but cant find the end of the string, as indicated by the 2nd quote'
   const textLen = show.que ? text : text.trim().slice(0, 90).concat('...')

   return (
      <WrapperRevies>
         <Topic>
            <p>1</p>
            <Foto>
               <img src={Image} alt="" />
            </Foto>
            <Model>
               <b> Asus</b>
               <p>Модель</p>
               <p> Арт.1212121212</p>
            </Model>
         </Topic>
         <Review isBold={isBoldShow}>
            <span>{textLen}</span>
            <p>20.06.22 - 14:15</p>
            {show.que && (
               <WrapperPhotos>
                  <img src={Image} alt="" />
                  <img src={Image} alt="" />
                  <img src={Image} alt="" />
                  <img src={Image} alt="" />
               </WrapperPhotos>
            )}
         </Review>

         <UserContainer>
            <UserGroup>
               <div>
                  <img src={Starrrr} alt="" />
               </div>
               <Div>
                  <img
                     style={{ width: '40px', height: '40px' }}
                     src={GroupIcon}
                     alt=""
                  />
                  <div>
                     <b> Адыл Бакытов</b>
                     <p> Adyl@mail.com</p>
                  </div>
                  <WrapperIcons>
                     <img src={VectorDelete} alt="" />
                     <div role="button" tabIndex={0} onClick={showHandler}>
                        {show.que && <img src={CheckVector} alt="" />}
                        {!show.que && <img src={VectorCheck} alt="" />}
                     </div>
                  </WrapperIcons>
               </Div>
            </UserGroup>
            {show.que && (
               <DivBlock>
                  <label htmlFor="text"> Ответить на комментарий</label>
                  <Textarea type="text" />
                  <div>
                     <Button variant="contained" width="180px" height="43px">
                        Ответить
                     </Button>
                  </div>
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
const WrapperPhotos = styled('div')`
   display: flex;
   margin-top: 10px;
   img {
      margin: 0 10px 0 0;
   }
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
   overflow-wrap: break-word;
   margin-left: 20px;
   span {
      font-weight: ${(props) => (props.isBold ? 400 : 600)};
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
   width: 400px;
   height: 130px;
   border-radius: 4px;
   padding: 10px 10px;
`
const DivBlock = styled('div')`
   margin: 0 0 40px 20px;
   div {
      display: flex;
      justify-content: flex-end;
   }
`
