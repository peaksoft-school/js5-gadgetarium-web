import { useState } from 'react'

import { InputLabel } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'

import { createSecondStage } from '../../../store/actions/stages/stagesActions'
import Button from '../../UI/Button'
import Input from '../../UI/inputs/Input'

const SecondStage = () => {
   const { products } = useSelector((state) => state.product)
   const [productData, setProductData] = useState({
      price: '',
      quantity: '',
   })
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const location = useLocation()
   const patharr = location.pathname
      .split('/')
      .filter(Boolean)
      .slice(0, -1)
      .join('/')

   const handleChange = (event) => {
      const { value } = event.target
      const { name } = event.target

      setProductData((prev) => {
         return {
            ...prev,
            [name]: value,
         }
      })
   }
   const { price, quantity } = productData
   const productId = products?.productId
   const onSubmit = () => {
      if (price && quantity) {
         dispatch(createSecondStage({ productId, price, quantity }))
         navigate(`/${patharr}/stage3`)
      } else {
         toast.error('Заполните поля')
      }
   }

   return (
      <div>
         <AddProductsFieldsContainer>
            <div>
               <StyledInputLabel>
                  Цена товара <RequiredLabel>*</RequiredLabel>
               </StyledInputLabel>
               <Input
                  type="number"
                  placeholder="Общая цена"
                  width="240px"
                  height="47px"
                  onChange={handleChange}
                  id="price"
                  name="price"
               />
            </div>
            <div>
               <StyledInputLabel>
                  Количество товара <RequiredLabel>*</RequiredLabel>
               </StyledInputLabel>
               <Input
                  type="number"
                  placeholder="Общee количество"
                  width="240px"
                  height="47px"
                  onChange={handleChange}
                  id="quantity"
                  name="quantity"
               />
            </div>
         </AddProductsFieldsContainer>
         <Button
            type="submit"
            variant="contained"
            width="100px"
            onClick={onSubmit}
         >
            Далее
         </Button>
      </div>
   )
}

export default SecondStage

const AddProductsFieldsContainer = styled.div`
   margin-bottom: 28px;
   display: flex;
   gap: 60px;
`
const StyledInputLabel = styled(InputLabel)`
   margin-bottom: 3px;
   color: #384255 !important;
   font-family: 'Inter' !important;
`
const RequiredLabel = styled.span`
   color: red;
`
