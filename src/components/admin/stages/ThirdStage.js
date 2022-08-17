import { InputLabel } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { formDetails } from '../../../store/slices/formSlice'
import Button from '../../UI/Button'
import Input from '../../UI/inputs/Input'
import TextEditor from '../../UI/TextEditor'

const SecondStage = () => {
   const dispatch = useDispatch()
   // const navigate = useNavigate()
   const { products } = useSelector((state) => state.form)
   const { handleSubmit, register, reset } = useForm({
      defaultValues: products,
   })
   const onSubmit = (data) => {
      dispatch(formDetails(data))
      reset()
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <AddProductsFieldsContainer>
            <div>
               <StyledInputLabel>Загрузите видеобзор</StyledInputLabel>
               <Input
                  type="file"
                  accept="video/mp4,video/x-m4v,video/*"
                  placeholder="Загрузите видеобзор"
                  width="396px"
                  height="35px"
                  id="video"
                  name="video"
                  autoComplete="off"
                  {...register('video')}
               />
            </div>
            <div>
               <StyledInputLabel>Загрузите файл</StyledInputLabel>
               <Input
                  type="file"
                  placeholder="Загрузите файл"
                  width="396px"
                  height="35px"
                  id="file"
                  name="file"
                  autoComplete="off"
                  {...register('file')}
               />
            </div>
         </AddProductsFieldsContainer>
         <AddProductsTexEditorContainer>
            <TextEditor />
         </AddProductsTexEditorContainer>
         <AddProductsButtonsContainer>
            <Button variant="outlined" width="100px">
               Отменить
            </Button>
            <Button type="submit" variant="contained" width="100px">
               Добавить
            </Button>
         </AddProductsButtonsContainer>
      </form>
   )
}

export default SecondStage

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
