import { useState, useEffect } from 'react'

import { IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { ReactComponent as Compare } from '../../assets/icons/compare.svg'
import { ReactComponent as Favorites } from '../../assets/icons/favorites.svg'
import { ReactComponent as Cart } from '../../assets/icons/shopping-cart.svg'
import { getAllHoverProducts } from '../../store/actions/cartActions'
import { getHoverCompareProducts } from '../../store/actions/comparisonActions'
import { getHoverWishProducts } from '../../store/actions/wishListActions'
import MuiBadge from '../UI/MuiBadge'
import ComparisonPopup from '../UI/popupMenus/ComparisonPopup'
import Tooltip from '../UI/Tooltip'

const UserTools = () => {
   const { compareHoverProducts } = useSelector(
      (state) => state.compareProducts
   )
   const { cartHoverProducts } = useSelector((state) => state.cart)
   const { hoverWishProducts } = useSelector((state) => state.wishProducts)

   const { user } = useSelector((state) => state.auth)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [isShown, setIsShown] = useState(null)
   const [isWishShown, setIsWishShown] = useState(null)
   const [isCartShow, setIsCartShow] = useState(null)

   const onClose = () => {
      setIsWishShown(null)
   }

   const handleNavigate = () => {
      navigate('comparison')
      setIsShown(null)
   }

   const handleWishNavigate = () => {
      navigate('favourites')
      setIsShown(null)
   }
   const handleCartNavigate = () => {
      navigate('cart')
      setIsCartShow(null)
   }

   useEffect(() => {
      if (user.jwt) {
         dispatch(getHoverCompareProducts())
      }
   }, [])

   useEffect(() => {
      if (user.jwt) {
         dispatch(getHoverWishProducts())
      }
      dispatch(getAllHoverProducts())
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
               onClose={() => setIsShown(null)}
               handleNavigate={handleNavigate}
            />
         )}
         {hoverWishProducts.length === 0 ? (
            <IconButton>
               <Tooltip
                  title="Выберите товар чтобы добавить в избранное"
                  placement="bottom"
               >
                  <Favorites />
               </Tooltip>
            </IconButton>
         ) : (
            <IconButton onClick={(e) => setIsWishShown(e.currentTarget)}>
               <MuiBadge counter={hoverWishProducts.length}>
                  <Favorites />
               </MuiBadge>
            </IconButton>
         )}
         {hoverWishProducts && (
            <ComparisonPopup
               cart={hoverWishProducts}
               title="Перейти в избранное"
               anchorEl={isWishShown}
               onClose={onClose}
               handleNavigate={handleWishNavigate}
            />
         )}
         {cartHoverProducts.length === 0 ? (
            <IconButton>
               <Tooltip
                  title="Выберите товар чтобы добавить в корзину"
                  placement="bottom"
               >
                  <Cart />
               </Tooltip>
            </IconButton>
         ) : (
            <IconButton onClick={(e) => setIsCartShow(e.currentTarget)}>
               <MuiBadge counter={cartHoverProducts.length}>
                  <Cart />
               </MuiBadge>
            </IconButton>
         )}
         {cartHoverProducts && (
            <ComparisonPopup
               cart={cartHoverProducts}
               title="Перейти в корзину"
               onClose={onClose}
               anchorEl={isCartShow}
               handleNavigate={handleCartNavigate}
            />
         )}
      </Container>
   )
}

export default UserTools

const Container = styled.div`
   display: flex;
   justify-content: space-between;
`
