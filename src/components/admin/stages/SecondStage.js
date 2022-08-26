import { InputLabel } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { formDetails } from '../../../store/slices/formSlice'
import Button from '../../UI/Button'
import Input from '../../UI/inputs/Input'
// import TableList from '../TableList'

const SecondStage = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const location = useLocation()
   const patharr = location.pathname
      .split('/')
      .filter(Boolean)
      .slice(0, -1)
      .join('/')
   const { products } = useSelector((state) => state.form)
   const { handleSubmit, register, reset } = useForm({
      defaultValues: products,
   })
   const onSubmit = (data) => {
      dispatch(formDetails(data))
      navigate(`/${patharr}/stage3`)
      reset()
   }

   return (
      <div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <AddProductsFieldsContainer>
               <div>
                  <StyledInputLabel>Общая цена *</StyledInputLabel>
                  <Input
                     type="text"
                     placeholder="Общая цена"
                     width="140px"
                     height="47px"
                     id="price"
                     name="price"
                     autoComplete="off"
                     {...register('price', {
                        required: true,
                     })}
                  />
                  <StyledButton variant="contained" width="186px" height="47px">
                     Установить цену
                  </StyledButton>
               </div>
            </AddProductsFieldsContainer>
            <AddProductsTableContainer>
               {/* <TableList columns={columns} data={data} /> */}
            </AddProductsTableContainer>
            <Button type="submit" variant="contained" width="100px">
               Далее
            </Button>
         </form>
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
