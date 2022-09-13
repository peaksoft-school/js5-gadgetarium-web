import { useState, useEffect, useMemo } from 'react'

import { InputLabel } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'

import {
   phoneCharacters,
   laptopCharacters,
   tabletCharacters,
   smartWathchesCharacters,
   accessoriesCharacters,
} from '../../../data/characters'
import {
   getBrands,
   getCategories,
   getSubcategories,
} from '../../../store/actions/categories/categoriesActions'
import { createFirstStage } from '../../../store/actions/stages/stagesActions'
import { nextStage } from '../../../store/slices/formSlice'
import AdminSelect from '../../UI/AdminSelect'
import Button from '../../UI/Button'
import Input from '../../UI/inputs/Input'
import ImageUpload from '../../UI/uploads/ImageUpload'
import ColorPalette from '../adminUI/ColorPalette'
import SelectCharacter from '../selects/DynamicTextFields'

const SELECTS = [
   {
      option: null,
      id: 1,
   },
   {
      option: phoneCharacters,
      id: 2,
   },
   {
      option: laptopCharacters,
      id: 3,
   },
   {
      option: tabletCharacters,
      id: 4,
   },
   {
      option: smartWathchesCharacters,
      id: 5,
   },
   {
      option: accessoriesCharacters,
      id: 6,
   },
]

const FirstStage = () => {
   // states
   const [productData, setProductData] = useState({
      productName: '',
      guarantee: '',
   })
   const [characters, setCharacters] = useState([])
   const [files, setFiles] = useState([])
   const [color, setColor] = useState()
   const [selectedCategory, setSelectedCategory] = useState(null)
   const [selectedSubcategory, setSelectedSubCategory] = useState(null)
   const [selectedBrand, setSelectedBrand] = useState(null)

   const { categories, subcategories, brands } = useSelector(
      (state) => state.product
   )
   const navigate = useNavigate()
   const dispatch = useDispatch()
   // useEffects
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
      return state ? data?.find((c) => c.label === state) : ''
   }
   // onChanges
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
   const { guarantee, productName } = productData
   const brandId = selectedBrand
   const subcategoryId = selectedSubcategory?.value
   console.log(productName)
   // onSubmit
   const onSubmit = (e) => {
      e.preventDefault()

      if (
         (productName && guarantee && brandId && characters.length > 0 && color,
         files.length > 0)
      ) {
         const updatedProductData = {
            ...productData,
            brandId,
            color,
            characters: [...characters],
         }
         console.log(updatedProductData)
         dispatch(
            createFirstStage({
               subcategoryId,
               updatedProductData,
               files,
            })
         )
         dispatch(nextStage(1))
         navigate('stage2')
      } else {
         toast.error('Заполните все поля')
      }
   }

   const OptionSelect = (selectedId) => {
      return useMemo(() => {
         const option = SELECTS[selectedId]
         return option
      }, [selectedId])
   }
   return (
      <div>
         <TabsContainer>
            <AddProductsFieldsContainer>
               <AdminSelect
                  placeholder="Выбрать категорию"
                  label="Выберите категорию"
                  variant="category"
                  value={getValue(categories, selectedCategory)}
                  onChange={(newValue) => setSelectedCategory(newValue)}
                  options={renderList(categories)}
               />
               <AdminSelect
                  placeholder="Выберите подкатегорию"
                  label="Выберите подкатегорию"
                  name="subcategory"
                  value={getValue(subcategories, selectedSubcategory)}
                  onChange={(newValue) => setSelectedSubCategory(newValue)}
                  options={renderList(subcategories)}
               />
               <AdminSelect
                  placeholder="Выберите бренд товара"
                  label="Бренд"
                  variant="brand"
                  name="brandId"
                  value={getValue(brands, selectedBrand)}
                  onChange={(newValue) => setSelectedBrand(newValue.value)}
                  options={renderList(brands)}
               />
               <div>
                  <StyledInputLabel>
                     Введите гарантию товара(месяцев)
                     <RequiredLabel>*</RequiredLabel>
                  </StyledInputLabel>
                  <Input
                     type="number"
                     placeholder="Введите гарантию товара"
                     width="396px"
                     height="38px"
                     id="guarantee"
                     onChange={handleChange}
                     name="guarantee"
                     autoComplete="off"
                  />
               </div>
               <div>
                  <StyledInputLabel>
                     Введите название товара <RequiredLabel>*</RequiredLabel>
                  </StyledInputLabel>
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
            <AddCharactersFieldsContainer>
               {selectedCategory?.value && (
                  <div>
                     <StyledInputLabel>
                        Основной цвет <RequiredLabel>*</RequiredLabel>
                     </StyledInputLabel>
                     <ColorPalette getColor={setColor} />
                  </div>
               )}
               <SelectCharacter
                  option={OptionSelect(selectedCategory?.value)}
                  setCharacters={setCharacters}
               />
               {selectedCategory?.value && (
                  <div>
                     <StyledInputLabel>
                        Добавьте фото <RequiredLabel>*</RequiredLabel>
                     </StyledInputLabel>
                     <ImageUpload getPhoto={setFiles} allPhotos={files} />
                  </div>
               )}
            </AddCharactersFieldsContainer>
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
const RequiredLabel = styled.span`
   color: red;
`
const AddCharactersFieldsContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 23px;
`
