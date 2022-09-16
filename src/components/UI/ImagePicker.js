import React, { useRef, useState, useEffect } from 'react'

import styled, { css } from 'styled-components'

import File from '../../assets/images/337564.png'

const ImagePicker = ({ onChange, newFile }) => {
   const refs = useRef()
   const [icons, setIcons] = useState()
   useEffect(() => {
      if (newFile) {
         //  const Image = URL.createObjectURL(newFile)
         setIcons(newFile)
      }
   }, [newFile])
   const deleteImageHandler = () => {
      refs.current.value = ''
      setIcons('')
   }
   const imageHandler = () => {
      const image = URL.createObjectURL(refs.current.files[0])
      setIcons(image)
      onChange(refs.current.files[0])
   }
   return (
      <ImagePickerContainer icons={icons}>
         <Label icons={icons} htmlFor="file" />
         <Input
            id="file"
            ref={refs}
            onChange={imageHandler}
            type="file"
            accept="image/jpeg,image/png,image/gif"
         />
         <DeleteButton onClick={deleteImageHandler}>Удалить</DeleteButton>
      </ImagePickerContainer>
   )
}
export default ImagePicker
const DeleteButton = styled.button`
   border: none;
   position: absolute;
   left: 10px;
   top: 110px;
   background-color: rgba(0, 0, 0, 0);
   bottom: 30px;
   font-family: 'Inter', sans-serif;
   font-weight: 400;
   font-size: 18px;
   color: #cb11ab;
   z-index: 10;
   display: none;
   cursor: pointer;
   display: none;
   &:hover { */
   /* /* text-decoration: underline; */
   opacity: 3;
   border-radius: 2px;
   font-family: 'Inter', sans-serif;
   align-items: center;
   margin-right: 3px;
   text-decoration: none; 
   }
`
const ImagePickerContainer = styled.div`
   background-repeat: no-repeat;
   background-position: 50% 50%;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 90px;
   height: 90px;
   background: #f6f6f9;
   border: 1px solid #dcdce4;
   border-radius: 50%;
   ${(props) =>
      props.icons &&
      css`
         background-image: url(${props.icons});
         background-size: cover;
         background-position: center;
         background-repeat: no-repeat;
         &::after {
            display: none;
         }
         &:hover {
            align-items: flex-start;
         }
         &:hover > label {
            display: block;
         }
         &:hover > button {
            display: block;
         }
      `}
`
const Input = styled.input`
   display: none;
`
const Label = styled.label`
   background-image: url(${File});
   display: block;
   margin-top: 10px;
   width: 200px;
   height: 100px;
   text-align: center;
   color: #8e8ea9;
   cursor: pointer;
   background-repeat: no-repeat;
   &::after {
      content: 'Нажмите для добавления фотографии';
      position: absolute;
      top: 100%;
      right: -57px;
      width: 148px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 130%;
      text-align: center;
      color: #91969e;
      width: 200px;
   }
   ${(props) =>
      props.icons &&
      css`
         background-image: none;
         display: none;
         &::after {
            content: 'Сменить фото';
            position: absolute;
            left: 40px;
            top: 100%;
            align-items: center;
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 18px;
            color: #cb11ab;
            transform: translateX(-50%);
         }
         /* &:hover:after { */
         text-decoration: underline;
         text-decoration: none;
         display: block;
         align-items: center;
         text-align: center;
         /* border-radius: 2px; */
         /* } */
      `}
`
