import { useState, useEffect } from 'react'

import { IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { ReactComponent as Compare } from '../../assets/icons/compare.svg'
import { ReactComponent as Favorites } from '../../assets/icons/favorites.svg'
import { ReactComponent as Cart } from '../../assets/icons/shopping-cart.svg'
// import Samsung from '../../assets/images/miniSamsung.png'
import { getHoverCompareProducts } from '../../store/actions/comparisonActions'
import MuiBadge from '../UI/MuiBadge'
import ComparisonPopup from '../UI/popupMenus/ComparisonPopup'
import Tooltip from '../UI/Tooltip'

const UserTools = () => {
   const { compareHoverProducts } = useSelector(
      (state) => state.compareProducts
   )
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [isShown, setIsShown] = useState(null)
   const onClose = () => {
      setIsShown(null)
   }
   const handleNavigate = () => {
      navigate('comparison')
      setIsShown(null)
   }

   console.log(compareHoverProducts)

   useEffect(() => {
      dispatch(getHoverCompareProducts())
   }, [])

   return (
      <Container>
         {compareHoverProducts.length === 0 ? (
            <IconButton>
               <Tooltip
                  title="Выберите товар чтобы сравнить"
                  placement="bottom"
               >
                  <Compare />
               </Tooltip>
            </IconButton>
         ) : (
            <IconButton onClick={(e) => setIsShown(e.currentTarget)}>
               <MuiBadge counter={compareHoverProducts.length}>
                  <Compare />
               </MuiBadge>
            </IconButton>
         )}
         {compareHoverProducts && (
            <ComparisonPopup
               cart={compareHoverProducts}
               title="Перейти в сравнение"
               anchorEl={isShown}
               onClose={onClose}
               handleNavigate={handleNavigate}
            />
         )}
         <IconButton>
            <MuiBadge counter={23}>
               <Favorites />
            </MuiBadge>
         </IconButton>
         <IconButton>
            <MuiBadge>
               <Cart />
            </MuiBadge>
         </IconButton>
      </Container>
   )
}

export default UserTools

const Container = styled.div`
   display: flex;
   justify-content: space-between;
`
