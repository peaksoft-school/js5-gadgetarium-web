import { useState } from 'react'

import { InputLabel } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { createSecondStage } from '../../../store/actions/stages/stagesActions'
import Button from '../../UI/Button'
import Input from '../../UI/inputs/Input'
import TableList from '../adminUI/TableList'

const data = [
   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, price: '', amout: '' },
   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
]

const columns = [
   {
      key: 'id',
      header: 'ID',
      width: 70,
   },
   { key: 'firstName', header: 'Product Name', width: 130 },
   { key: 'lastName', header: 'Last name', width: 130 },
   {
      key: 'age',
      header: 'Age',
      width: 90,
   },
   {
      key: 'amount',
      header: 'Кол-во товара',
      width: 160,
      cell: () => {
         return (
            <ContainerInput>
               <StyledInput type="number" />
            </ContainerInput>
         )
      },
      style: { padding: '0' },
   },
   {
      key: 'price',
      header: 'Цена',
      width: 160,
      cell: () => {
         return (
            <ContainerInput>
               <StyledInput type="number" />
            </ContainerInput>
         )
      },
      style: { padding: '0' },
   },
]

const ContainerInput = styled.div`
   width: 100%;
   height: 100%;
   border-left: 1px solid #cdcdcd;
`

const StyledInput = styled.input`
   width: 100%;
   height: 100%;
   border: none;
   background: #cb11ab1a;
   outline: none;
   color: #292929;
   padding: 27px 20px;
   font-size: 16px;
`

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
   console.log(productId)
   const onSubmit = () => {
      // dispatch(formDetails(data))
      dispatch(createSecondStage({ productId, price, quantity }))
      navigate(`/${patharr}/stage3`)
   }

   return (
      <div>
         <AddProductsFieldsContainer>
            <div>
               <StyledInputLabel>
                  Общая цена <RequiredLabel>*</RequiredLabel>
               </StyledInputLabel>
               <Input
                  type="number"
                  placeholder="Общая цена"
                  width="140px"
                  height="47px"
                  onChange={handleChange}
                  id="price"
                  name="price"
               />
               <StyledButton variant="contained" width="186px" height="47px">
                  Установить цену
               </StyledButton>
               <StyledInputLabel>
                  Общая количество <RequiredLabel>*</RequiredLabel>
               </StyledInputLabel>
               <Input
                  type="number"
                  placeholder="Общee количество"
                  width="140px"
                  height="47px"
                  onChange={handleChange}
                  id="quantity"
                  name="quantity"
               />
            </div>
         </AddProductsFieldsContainer>
         <AddProductsTableContainer>
            <TableList columns={columns} data={data} />
         </AddProductsTableContainer>
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
`
const AddProductsTableContainer = styled.div``
const StyledInputLabel = styled(InputLabel)`
   margin-bottom: 3px;
   color: #384255 !important;
   font-family: 'Inter' !important;
`
const StyledButton = styled(Button)`
   margin-left: 20px !important;
`
const RequiredLabel = styled.span`
   color: red;
`
