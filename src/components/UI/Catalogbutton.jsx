import { useEffect } from 'react'

import Grid from '@mui/material/Grid'
import { useDispatch, useSelector } from 'react-redux'

import { getCategories } from '../../store/actions/CatalogActions'

import DropdownMenu from './DropdownMenu'
import MenuItem from './MenuItem'
import SideMenu from './SideMenu'

function CatalogButton() {
   const dispatch = useDispatch()
   // const [data, setData] = useState()
   const data = useSelector((state) => state.catalogSlice.categories)
   useEffect(() => {
      dispatch(getCategories())
   }, [])
   return (
      <div>
         <Grid
            container
            direction="row"
            // justify="space-around"
            // alignItems="flex-start"
         >
            <DropdownMenu text="Каталог" color="primary">
               {data &&
                  data.map((el) => (
                     <SideMenu
                        onClose={() => console.log('hello')}
                        key={el.id}
                        text={el.name}
                     >
                        {el.subCategories.map((el) => (
                           <MenuItem key={el.id} text={el.name} />
                        ))}
                     </SideMenu>
                  ))}
            </DropdownMenu>
         </Grid>
      </div>
   )
}
export default CatalogButton
