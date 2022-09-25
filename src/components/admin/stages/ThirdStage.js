import { useState } from 'react'

import { InputLabel } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'

import { createThirdStage } from '../../../store/actions/stages/stagesActions'
import { clearSessionStorage } from '../../../store/slices/productSlice'
import Button from '../../UI/Button'
import Input from '../../UI/inputs/Input'
import TextEditor from '../../UI/TextEditor'
import { FileUpload } from '../../UI/uploads/fileUpload'

const ThirdStage = () => {
   const [pdfFile, setPdfFile] = useState(null)
   const [videoReview, setVideoReview] = useState('')
   const [description, setDescription] = useState('')
   const { products } = useSelector((state) => state.product)

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const onChange = (value) => {
      setDescription(value)
   }

   const handleChange = (event) => {
      setVideoReview(event.target.value)
   }
   const productId = products?.productId
   const onSubmit = () => {
      if (videoReview && description && pdfFile) {
         dispatch(
            createThirdStage({ productId, videoReview, description, pdfFile })
         )
         dispatch(clearSessionStorage())
         navigate('/admin/products')
      } else {
         toast.error('Заполните все поля')
      }
   }

   return (
      <>
         <AddProductsFieldsContainer>
            <div>
               <StyledInputLabel>
                  Введите сюда ID видео(Youtube)
                  <RequiredLabel>*</RequiredLabel>
               </StyledInputLabel>
               <Input
                  name="videoReview"
                  id="videoReview"
                  placeholder="Вставьте сюда ссылку на видеообзор"
                  onChange={handleChange}
                  value={videoReview}
                  width="396px"
                  height="37px"
               />
            </div>
            <div>
               <StyledInputLabel>
                  Загрузите файл (размер до 1МБ)<RequiredLabel>*</RequiredLabel>
               </StyledInputLabel>
               <FileUpload pdfFile={pdfFile} setPdfFile={setPdfFile} />
            </div>
         </AddProductsFieldsContainer>
         <AddProductsTexEditorContainer>
            <StyledInputLabel>
               Описание <RequiredLabel>*</RequiredLabel>
            </StyledInputLabel>
            <TextEditor onChange={onChange} value={description} />
         </AddProductsTexEditorContainer>
         <AddProductsButtonsContainer>
            <Button
               variant="outlined"
               width="100px"
               onClick={() => navigate(-1)}
            >
               Отменить
            </Button>
            <Button
               type="submit"
               variant="contained"
               width="100px"
               onClick={onSubmit}
            >
               Добавить
            </Button>
         </AddProductsButtonsContainer>
      </>
   )
}

export default ThirdStage

const AddProductsFieldsContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: 1fr;
   grid-column-gap: 20px;
   margin-bottom: 28px;
   width: 800px;
`
const AddProductsTexEditorContainer = styled.div`
   max-width: 812px;
   height: 380px;
`
const StyledInputLabel = styled(InputLabel)`
   margin-bottom: 3px;
   color: #384255 !important;
   font-family: 'Inter' !important;
`
const AddProductsButtonsContainer = styled.div`
   display: flex;
   margin-left: 592px;
   margin-top: 28px;
   column-gap: 20px;
`
const RequiredLabel = styled.span`
   color: red;
`
