import Grid from '@mui/material/Grid'
import { useNavigate, useSearchParams } from 'react-router-dom'

import CATEGORIES from '../../assets/data/categories'

import DropdownMenu from './DropdownMenu'
import MenuItem from './MenuItem'
import SideMenu from './SideMenu'

export const CATEGORY = 'category'
export const SUBCATEGORY = 'subcategory'
export const SUBCATEGORYID = 'subcategoryId'

function CatalogButton() {
   const [searchParams, setSearchParams] = useSearchParams({})
   const navigate = useNavigate()
   const test = (name, id, sub) => {
      searchParams.set(CATEGORY, name)
      searchParams.set(SUBCATEGORYID, id)
      searchParams.set(SUBCATEGORY, sub)
      setSearchParams(searchParams)
      navigate({
         pathname: '/catalog',
         search: searchParams.toString(),
      })
   }
   return (
      <div>
         <Grid container direction="row">
            <DropdownMenu text="Каталог" color="primary">
               {CATEGORIES.map((el) => (
                  <SideMenu
                     // onClose={() => console.log('hello')}
                     key={el.id}
                     text={el.name}
                  >
                     {el.subCategories.map((e) => (
                        <MenuItem
                           key={e.id}
                           onClick={() => {
                              test(el.name, e.id, e.name)
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
