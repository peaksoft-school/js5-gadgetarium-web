import { useState, useEffect } from 'react'

import { InputLabel } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { phoneCharacters } from '../../../data/characters'
import { formDetails, nextStage } from '../../../store/slices/formSlice'
import {
   createFirstStage,
   getBrands,
   getCategories,
   getSubcategories,
} from '../../../store/slices/productSlice'
import AdminSelect from '../../UI/AdminSelect'
import Button from '../../UI/Button'
import FileUpload from '../../UI/FileUpload'
import Input from '../../UI/inputs/Input'
import ColorPalette from '../ColorPalette'

const FirstStage = () => {
   const [productData, setProductData] = useState({
      productName: '',
      quarantee: '',
      images: [],
   })
   const [characters, setCharacters] = useState([])
   const [files, setFiles] = useState([
      {
         name: 'myFile.pdf',
      },
   ])
   console.log(characters)
   const { categories, subcategories, brands } = useSelector(
      (state) => state.product
   )
   const [selectedCategory, setSelectedCategory] = useState(null)
   const [selectedSubcategory, setSelectedSubCategory] = useState(null)
   const [selectedBrand, setSelectedBrand] = useState(null)
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const { quarantee, productName } = productData

   useEffect(() => {
      dispatch(getCategories())
   }, [])

   useEffect(() => {
      dispatch(getBrands())
   }, [])

   useEffect(() => {
      if (selectedCategory?.value) {
         dispatch(getSubcategories(selectedCategory?.value))
      }
   }, [selectedCategory])

   const renderList = (option) => {
      return option?.map((data) => ({ label: data.name, value: data.id }))
   }

   const getValue = (data, state) => {
      return state ? data.find((c) => c.label === state) : ''
   }

   const onChange = (newValue) => {
      setSelectedCategory(newValue)
   }

   const subChange = (newValue) => {
      setSelectedSubCategory(newValue)
   }
   const selectChange = (selectedOption) => {
      setCharacters((prevState) => {
         const newArr = prevState.find(
            (elem) => elem.key === selectedOption.key
         )
         if (newArr) {
            return prevState.map((elem) => {
               if (elem.key === selectedOption.key) {
                  return selectedOption
               }
               return elem
            })
         }
         return [...prevState, selectedOption]
      })
   }

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

   const handleChangeFile = (file) => {
      setFiles(file)
   }

   const brandChange = (newValue) => {
      setSelectedBrand(newValue.value)
   }
   const brandId = selectedBrand
   const subcategoryId = selectedSubcategory?.value

   const onSubmit = (e) => {
      e.preventDefault()

      if (productName && quarantee) {
         const updatedProductData = { ...productData, brandId }
         dispatch(formDetails({ updatedProductData }))
         dispatch(
            createFirstStage({
               subcategoryId,
               updatedProductData,
            })
         )
         dispatch(nextStage(1))
         navigate('stage2')
      }
   }
   return (
      <div>
         <TabsContainer>
            <AddProductsFieldsContainer>
               <AdminSelect
                  placeholder="Выбрать категорию"
                  label="Выберите категорию *"
                  variant="category"
                  value={getValue(categories, selectedCategory)}
                  onChange={onChange}
                  options={renderList(categories)}
               />
               <AdminSelect
                  placeholder="Выберите подкатегорию"
                  label="Выберите подкатегорию *"
                  name="subcategory"
                  value={getValue(subcategories, selectedSubcategory)}
                  onChange={subChange}
                  options={renderList(subcategories)}
               />
               <AdminSelect
                  placeholder="Выберите бренд товара"
                  label="Бренд *"
                  variant="brand"
                  name="brandId"
                  value={getValue(brands, selectedBrand)}
                  onChange={brandChange}
                  options={renderList(brands)}
               />
               <div>
                  <StyledInputLabel>Введите гарантию товара *</StyledInputLabel>
                  <Input
                     type="text"
                     placeholder="Введите гарантию товара"
                     width="396px"
                     height="38px"
                     id="quarantee"
                     onChange={handleChange}
                     name="quarantee"
                     autoComplete="off"
                  />
               </div>
               <div>
                  <StyledInputLabel>Введите название товара *</StyledInputLabel>
                  <Input
                     placeholder="Введите название товара"
                     width="396px"
                     height="38px"
                     id="productName"
                     onChange={handleChange}
                     name="productName"
                     autoComplete="off"
                  />
               </div>
            </AddProductsFieldsContainer>
            <StyledInputLabel>Основной цвет *</StyledInputLabel>
            <ColorPalette />
            {phoneCharacters.map((data) => (
               <div key={data.id}>
                  <StyledInputLabel>{data.placeholder} *</StyledInputLabel>
                  <AdminSelect
                     options={data.value}
                     placeholder={data.placeholder}
                     onChange={selectChange}
                     // value={getValue(data.value, characters)}
                  />
               </div>
            ))}
            <StyledInputLabel>Добавьте фото</StyledInputLabel>
            <FileUpload onChange={handleChangeFile} file={files} />
            <Button
               onClick={onSubmit}
               type="submit"
               variant="contained"
               width="100px"
            >
               Далее
            </Button>
         </TabsContainer>
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

const TabsContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 14px;
`
