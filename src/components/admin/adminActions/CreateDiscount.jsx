import { useState } from 'react'

import { InputLabel } from '@mui/material'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import styled from 'styled-components'

import { createDiscountProducts } from '../../../store/actions/stages/stagesActions'
import { dateFormatter, reduceDates } from '../../../utils/helpers/general'
import BasicModal from '../../UI/BasicModal'
import Button from '../../UI/Button'
import DatePicker from '../../UI/DatePicker'
import Input from '../../UI/inputs/Input'

const CreateDiscount = ({ open, onClose, productId, setCheckedProducts }) => {
   const dispatch = useDispatch()
   const [discount, setDiscount] = useState({
      percent: '',
      dateOfStart: null,
      dateOfFinish: null,
   })
   const handleChange = (event) => {
      const { value } = event.target
      const { name } = event.target

      setDiscount((prev) => {
         return {
            ...prev,
            [name]: value,
         }
      })
   }

   const onStartChange = (start) => {
      const formatDate = new Date(start)
      setDiscount((prev) => {
         return {
            ...prev,
            dateOfStart:
               dateFormatter(formatDate) === 'NaN-NaN-NaN'
                  ? null
                  : dateFormatter(formatDate),
         }
      })
   }

   const onFinishChange = (end) => {
      const formatDate = new Date(end)
      setDiscount((prev) => {
         return {
            ...prev,
            dateOfFinish:
               dateFormatter(formatDate) === 'NaN-NaN-NaN'
                  ? null
                  : dateFormatter(formatDate),
         }
      })
   }
   const { percent, dateOfFinish, dateOfStart } = discount

   const validate = !(reduceDates(dateOfStart) > reduceDates(dateOfFinish))

   const onSubmit = (e) => {
      e.preventDefault()
      const formData = { productId, ...discount }
      if (
         percent &&
         dateOfFinish &&
         dateOfStart &&
         percent <= 100 &&
         dateOfFinish !== dateOfStart &&
         validate
      ) {
         dispatch(createDiscountProducts({ formData, dispatch }))
         setDiscount({
            percent: '',
            dateOfStart: null,
            dateOfFinish: null,
         })
         setCheckedProducts({
            productId: [],
         })
         onClose()
      } else {
         toast.error('Заполните корректные данные')
      }
   }
   return (
      <BasicModal open={open} onClose={onClose}>
         <Container>
            <Title>Cоздать скидку</Title>
            <TextFieldContainer>
               <DicountBlock>
                  <StyledInputLabel>
                     Размер скидки <RequiredLabel>*</RequiredLabel>
                  </StyledInputLabel>
                  <Input
                     type="number"
                     placeholder="0%"
                     height="35px"
                     id="percent"
                     onChange={handleChange}
                     name="percent"
                     autoComplete="off"
                  />
               </DicountBlock>
               <DateBlock>
                  <DatePicker
                     value={discount.dateOfStart}
                     onChange={(newValue) => onStartChange(newValue)}
                     width="230px"
                     height="35px"
                     disablePast
                     placeholder="Выберите дату"
                  />
                  <DatePicker
                     value={discount.dateOfFinish}
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

export default CreateDiscount

const Container = styled.div`
   display: flex;
   flex-direction: column;
   gap: 32px;
`

const Title = styled.h1`
   font-style: normal;
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
