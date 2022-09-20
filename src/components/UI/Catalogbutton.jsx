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
            <DropdownMenu onClose text="Каталог" color="primary">
               {CATEGORIES.map((el) => (
                  <SideMenu onClose key={el.id} text={el.name}>
                     {el.subCategories.map((e) => (
                        <MenuItem
                           key={e.id}
                           onClose
                           onClick={() => {
                              searchParamHandler(el.name, e.id, e.name)
                           }}
                           text={e.name}
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
