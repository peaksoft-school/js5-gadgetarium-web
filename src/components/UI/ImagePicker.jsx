import { useState, useRef, useEffect } from 'react'

import styled, { css } from 'styled-components'

import Icon from '../../assets/icons/imagePicker.svg'

function ImagePicker({ onChange, onDelete, file, id }) {
   const [icon, setIcon] = useState()
   const filesRef = useRef()

   useEffect(() => {
      if (file) {
         const name = URL.createObjectURL(file)
         setIcon(name)
      }
   }, [file])

   const iconHandleChange = () => {
      if (!filesRef.current.files[0]) {
         return
      }
      const name = URL.createObjectURL(filesRef.current.files[0])
      setIcon(name)
      onChange(filesRef.current.files[0])
   }

   const deleteFileHandler = () => {
      filesRef.current.value = ''
      setIcon('')
      onDelete()
   }

   return (
      <ImageContainer primary={icon}>
         <InputLabel htmlFor={id} primary={icon} />
         <InputFile
            type="file"
            id={id}
            ref={filesRef}
            onChange={iconHandleChange}
            accept="image/jpeg,image/png,image/gif"
         />
         <Ul>
            <li>Минимальное разрешение - 450x600</li>
            <li>максимальное количество - 10 фото</li>
         </Ul>
         <DeleteFile onClick={deleteFileHandler}>удалить</DeleteFile>
      </ImageContainer>
   )
}

export default ImagePicker

const DeleteFile = styled.button`
   border: none;
   position: absolute;
   background-color: rgba(0, 0, 0, 0);
   bottom: 30px;
   font-weight: 400;
   font-size: 18px;
   color: #fff;
   z-index: 10;
   display: none;
   cursor: pointer;
   &:hover {
      text-decoration: underline;
      color: #f34901;
   }
`

const InputLabel = styled.label`
   display: block;
   width: 67px;
   height: 61px;
   background-image: url(${Icon});
   background-repeat: no-repeat;
   cursor: pointer;
   position: absolute;
   z-index: 100;
   ${(props) =>
      props.primary &&
      css`
         height: 1.2rem;
         background-image: none;
         position: relative;
         margin-top: 213px;
         display: none;
         &:after {
            content: 'Заменить';
            position: absolute;
            font-weight: 400;
            font-size: 18px;
            color: #fff;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
         }
         &:hover:after {
            text-decoration: underline;
            color: #f34901;
         }
      `}
`

const ImageContainer = styled.div`
   height: 168px;
   width: 396px;
   padding: 30px 0 34px 0;
   background: rgba(144, 156, 181, 0.2);
   background-repeat: no-repeat;
   background-position: 50% 50%;
   border: 1px dashed #292929;
   border-radius: 4px;
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   ${(props) =>
      props.primary &&
      css`
         background-image: url(${props.primary});
         &:after {
            display: none;
         }
         &:hover::after {
            content: '';
            display: block;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
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
   &:hover {
      background-color: #e0e0e0;
   }
   &:after {
      content: 'Нажмите или перетащите сюда файл';
      position: absolute;
      top: 55%;
      left: 14%;
      font-weight: 400;
      font-size: 12px;
      color: #384255;
      padding-left: 30px;
      padding-right: 30px;
   }
`
const Ul = styled.ul`
   font-size: 11px;
   color: #384255;
`
const InputFile = styled.input`
   height: 0;
   width: 0;
   &:hover {
      cursor: pointer;
   }
`
