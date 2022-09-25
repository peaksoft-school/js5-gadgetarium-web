import Grid from '@mui/material/Grid'
import { useDispatch } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'

import CATEGORIES from '../../assets/data/categories'
import { getProductsCatalog } from '../../store/actions/CatalogActions'

import DropdownMenu from './DropdownMenu'
import MenuItem from './MenuItem'
import SideMenu from './SideMenu'

export const CATEGORY = 'category'
export const SUBCATEGORY = 'subcategory'
export const SUBCATEGORYID = 'subcategoryId'

function CatalogButton() {
   const [searchParams, setSearchParams] = useSearchParams({})
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const searchParamHandler = (name, id, sub) => {
      searchParams.set(CATEGORY, name)
      searchParams.set(SUBCATEGORYID, id)
      searchParams.set(SUBCATEGORY, sub)
      setSearchParams(searchParams)
      navigate({
         pathname: '/catalog',
         search: searchParams.toString(),
      })
      dispatch(getProductsCatalog({ search: 'all', subCategoryId: id }))
   }

   return (
      <div>
         <Grid container direction="row">
            <DropdownMenu onClose text="Каталог">
               {CATEGORIES.map((category) => (
                  <SideMenu onClose key={category.id} text={category.name}>
                     {category.subCategories.map((subcategory) => (
                        <MenuItem
                           key={subcategory.id}
                           onClose
                           onClick={() => {
                              searchParamHandler(
                                 category.name,
                                 subcategory.id,
                                 subcategory.name
                              )
                           }}
                           text={subcategory.name}
                        />
                     ))}
                  </SideMenu>
               ))}
            </DropdownMenu>
         </Grid>
      </div>
   )
}
export default CatalogButton
