import { useState } from 'react'

import { InputLabel } from '@mui/material'
import { format } from 'date-fns'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { sendMailingList } from '../../../store/slices/mailingSlice'
import BasicModal from '../../UI/BasicModal'
import Button from '../../UI/Button'
import DatePicker from '../../UI/DatePicker'
import Input from '../../UI/inputs/Input'
import ImagePicker from '../../UI/uploads/ImagePickerForMailing'

const CreateMailingList = ({ onClose, open }) => {
   const [file, setFile] = useState()
   const [mailing, setMailing] = useState({
      title: '',
      description: '',
      dateOfStart: null,
      dateOfFinish: null,
   })

   const dispatch = useDispatch()

   const onChange = (newValue) => {
      setFile(newValue)
   }

   const handleChange = (event) => {
      const { value } = event.target
      const { name } = event.target

      setMailing((prev) => {
         return {
            ...prev,
            [name]: value,
         }
      })
   }

   const onStartChange = (start) => {
      setMailing((prev) => {
         return {
            ...prev,
            dateOfStart: format(start, 'yyyy-MM-dd'),
         }
      })
   }

   const onFinishChange = (end) => {
      setMailing((prev) => {
         return {
            ...prev,
            dateOfFinish: format(end, 'yyyy-MM-dd'),
         }
      })
   }

   const onSubmit = () => {
      dispatch(sendMailingList({ mailing, file, onClose }))
      setMailing({
         title: '',
         description: '',
         dateOfStart: null,
         dateOfFinish: null,
      })
      setFile('')
   }
   return (
      <BasicModal open={open} onClose={onClose}>
         <Container>
            <HeaderTitle>Создать рассылку</HeaderTitle>
            <ImageContainer>
               <ImagePicker onChange={onChange} id="mailing-list" />
            </ImageContainer>
            <TextFieldContainer>
               <DicountBlock>
                  <StyledInputLabel>
                     Название рассылки <RequiredLabel>*</RequiredLabel>
                  </StyledInputLabel>
                  <Input
                     type="text"
                     placeholder="Введите название рассылки"
                     height="35px"
                     id="title"
                     onChange={handleChange}
                     name="title"
                     autoComplete="off"
                  />
               </DicountBlock>
               <DicountBlock>
                  <StyledInputLabel>
                     Описание рассылки <RequiredLabel>*</RequiredLabel>
                  </StyledInputLabel>
                  <Input
                     type="text"
                     placeholder="Введите описание рассылки *"
                     height="35px"
                     id="description"
                     onChange={handleChange}
                     name="description"
                     autoComplete="off"
                  />
               </DicountBlock>
               <DateBlock>
                  <DatePicker
                     value={mailing.dateOfStart}
                     onChange={(newValue) => onStartChange(newValue)}
                     width="230px"
                     height="35px"
                     disablePast
                     placeholder="Выберите дату"
                  />
                  <DatePicker
                     value={mailing.dateOfFinish}
                     onChange={(newValue) => onFinishChange(newValue)}
                     width="230px"
                     height="35px"
                     disablePast
                     placeholder="Выберите дату"
                  />
               </DateBlock>
            </TextFieldContainer>
            <ButtonsContainer>
               <Button variant="outlined" width="230px" onClick={onClose}>
                  Отменить
               </Button>
               <Button
                  variant="contained"
                  height="40px"
                  width="230px"
                  onClick={onSubmit}
               >
                  Добавить
               </Button>
            </ButtonsContainer>
         </Container>
      </BasicModal>
   )
}

export default CreateMailingList

const Container = styled.div`
   display: flex;
   flex-direction: column;
   gap: 32px;
`
const HeaderTitle = styled.h1`
   font-weight: 500;
   font-size: 24px;
   line-height: 32px;
   text-align: center;

   color: #292929;
`
const TextFieldContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
`

const ButtonsContainer = styled.div`
   display: flex;
   flex-direction: row;
   gap: 20px;
`
const StyledInputLabel = styled(InputLabel)`
   margin-bottom: 3px;
   color: #384255 !important;
   font-family: 'Inter' !important;
`

const RequiredLabel = styled.span`
   color: red;
`
const DicountBlock = styled.div`
   font-size: 14px;
`
const DateBlock = styled.div`
   display: flex;
   flex-direction: row;
   gap: 20px;
`
const ImageContainer = styled.div`
   margin: 0 auto;
`
