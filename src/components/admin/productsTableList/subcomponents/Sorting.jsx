import { SORT } from '../../../../utils/constants/constants'
import DropdownMenu from '../../../UI/dropdownMenu/DropdownMenu'
import MenuItem from '../../../UI/dropdownMenu/MenuItem'
import SideMenu from '../../../UI/dropdownMenu/SideMenu'

const Sorting = ({ onChange }) => {
   return (
      <div>
         <DropdownMenu text="Сортировать" color="secondary">
            <MenuItem text="Новинки" onChange={onChange} sortType={SORT.NEW} />
            <SideMenu text="По акции">
               <MenuItem
                  text="Все акции"
                  onChange={onChange}
                  sortType={SORT.DISCOUNT}
               />
               <MenuItem
                  text="Свыше 50%"
                  onChange={onChange}
                  sortType={SORT.DISCOUNT_UP_FIFTY}
               />
               <MenuItem
                  text="До 50%"
                  onChange={onChange}
                  sortType={SORT.DISCOUNT_DOWN_FIFTY}
               />
            </SideMenu>
            <MenuItem
               text="Рекомендуемые"
               onChange={onChange}
               sortType={SORT.RECOMMEND}
            />
            <MenuItem
               text="По увеличению цены"
               onChange={onChange}
               sortType={SORT.PRICE_ACS}
            />
            <MenuItem
               text="По уменьшению цены"
               onChange={onChange}
               sortType={SORT.PRICE_DESC}
            />
         </DropdownMenu>
      </div>
   )
}

export default Sorting
