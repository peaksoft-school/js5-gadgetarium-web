import { useState, useEffect } from 'react'

import { InputLabel } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

import { formDetails } from '../../../store/slices/formSlice'
import {
   getBrands,
   getCategories,
   getSubcategories,
} from '../../../store/slices/productSlice'
import AdminSelect from '../../UI/AdminSelect'
import Button from '../../UI/Button'
import Input from '../../UI/inputs/Input'

const FirstStage = () => {
   const { categories, subcategories, brands } = useSelector(
      (state) => state.product
   )
   const [selectedCategory, setSelectedCategory] = useState(null)
   const [selectedSubcategory, setSelectedSubCatelogy] = useState(null)
   const [selectedBrand, setSelectedBrand] = useState(null)
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { handleSubmit, register, control, reset } = useForm({
      mode: 'onSubmit',
   })

   useEffect(() => {
      dispatch(getCategories())
   }, [])

   useEffect(() => {
      dispatch(getBrands())
   }, [])

   useEffect(() => {
      if (selectedCategory) {
         dispatch(getSubcategories(selectedCategory))
      }
   }, [selectedCategory])

   const renderList = (option) => {
      return option?.map((data) => ({ label: data.name, value: data.id }))
   }

   const getValue = () => {
      return selectedCategory
         ? categories.find((c) => c.value === selectedCategory)
         : ''
   }

   const geSubValue = () => {
      return selectedSubcategory
         ? subcategories.find((c) => c.value === selectedSubcategory)
         : ''
   }

   const getBrandValue = () => {
      return selectedBrand ? brands.find((c) => c.value === selectedBrand) : ''
   }

   const onChange = (newValue) => {
      setSelectedCategory(newValue.value)
   }

   const handleChange = (newValue) => {
      setSelectedSubCatelogy(newValue.value)
   }

   const brandChange = (newValue) => {
      setSelectedBrand(newValue.value)
   }

   const onSubmit = (data) => {
      dispatch(formDetails(data))
      navigate('stage2')
      reset()
   }
   return (
      <div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <AddProductsFieldsContainer>
               <Controller
                  name="category"
                  control={control}
                  value={selectedCategory}
                  onChange={(arg) => setSelectedCategory(arg)}
                  render={({ field }) => (
                     <AdminSelect
                        {...field}
                        placeholder="Выбрать категорию"
                        label="Выберите категорию *"
                        name="category"
                        variant="category"
                        value={getValue()}
                        onChange={onChange}
                        options={renderList(categories)}
                     />
                  )}
               />
               <Controller
                  name="subcategory"
                  control={control}
                  render={({ field }) => (
                     <AdminSelect
                        {...field}
                        placeholder="Выберите подкатегорию"
                        label="Выберите подкатегорию *"
                        name="subcategory"
                        value={geSubValue()}
                        onChange={handleChange}
                        options={renderList(subcategories)}
                     />
                  )}
               />
               <Controller
                  name="brand"
                  control={control}
                  render={({ field }) => (
                     <AdminSelect
                        {...field}
                        placeholder="Выберите бренд товара"
                        label="Бренд *"
                        variant="brand"
                        name="brand"
                        value={getBrandValue()}
                        onChange={brandChange}
                        options={renderList(brands)}
                     />
                  )}
               />
               <div>
                  <StyledInputLabel>Введите гарантию товара *</StyledInputLabel>
                  <Input
                     type="text"
                     placeholder="Введите гарантию товара"
                     width="396px"
                     height="38px"
                     id="guarantee"
                     name="guarantee"
                     autoComplete="off"
                     {...register('guarantee', {
                        required: true,
                     })}
                  />
               </div>
               <div>
                  <StyledInputLabel>Введите название товара *</StyledInputLabel>
                  <Input
                     placeholder="Введите название товара"
                     width="396px"
                     height="38px"
                     id="productName"
                     name="productName"
                     autoComplete="off"
                     {...register('productName', {
                        required: true,
                     })}
                  />
               </div>
            </AddProductsFieldsContainer>
            <Button type="submit" variant="contained" width="100px">
               Далее
            </Button>
         </form>
      </div>
   )
}

export default FirstStage

const AddProductsFieldsContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: repeat(3, 1fr);
   grid-column-gap: 20px;
   grid-row-gap: 16px;
   max-width: 812px;
   margin-bottom: 28px;
`
const StyledInputLabel = styled(InputLabel)`
   margin-bottom: 3px;
   color: #384255 !important;
   font-family: 'Inter' !important;
`
