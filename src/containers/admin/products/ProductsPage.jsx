import React, { useState } from 'react'

import { IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'

import { ReactComponent as SearchIcon } from '../../../assets/icons/searchIcon.svg'
import CreateDiscount from '../../../components/admin/adminActions/CreateDiscount'
import Infographic from '../../../components/admin/adminUI/Infographic'
import AllProducts from '../../../components/admin/productsTableList/AllProducts'
import BasketProducts from '../../../components/admin/productsTableList/BasketProducts'
import OnSaleProducts from '../../../components/admin/productsTableList/OnSaleProducts'
import WishListProducts from '../../../components/admin/productsTableList/WishListProducts'
import Button from '../../../components/UI/Button'
import Tab from '../../../components/UI/Tab'

const ProductsPage = () => {
   const [search, setSearch] = useState('')
   const [checkedProducts, setCheckedProducts] = useState({
      productId: [],
   })
   const [open, setOpen] = useState(false)

   const openModal = () => {
      if (checkedProducts.productId.length > 0) {
         setOpen(true)
      } else {
         toast.error('Выберите сначала товар')
      }
   }
   const closeModal = () => {
      setOpen(false)
   }

   const tabsArray = [
      {
         id: 1,
         value: 'Все товары',
         label: 'Все товары',
         Component: (
            <AllProducts
               checkedProducts={checkedProducts}
               setCheckedProducts={setCheckedProducts}
            />
         ),
      },
      {
         id: 2,
         value: 'В продаже',
         label: 'В продаже',
         Component: <OnSaleProducts />,
      },
      {
         id: 3,
         value: 'В избранном',
         label: 'В избранном',
         Component: <WishListProducts />,
      },
      {
         id: 4,
         value: 'В корзине',
         label: 'В корзине',
         Component: <BasketProducts />,
      },
   ]
   return (
      <Container>
         <FirsContentContainer>
            <TopContentContainer>
               <SearchContainer>
                  <SearchInput
                     placeholder="Поиск по артикулу или..."
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                  />
                  <IconButton>
                     <SearchIcon />
                  </IconButton>
               </SearchContainer>
               <StyledButtonContainer>
                  <Link to="addproducts">
                     <Button variant="outlined" width="184px" height="43px">
                        Добавить товар
                     </Button>
                  </Link>
                  <Button
                     variant="outlined"
                     width="184px"
                     height="43px"
                     onClick={openModal}
                  >
                     Создать скидку
                  </Button>
                  <CreateDiscount
                     open={open}
                     onClose={closeModal}
                     productId={checkedProducts.productId}
                     setCheckedProducts={setCheckedProducts}
                  />
               </StyledButtonContainer>
            </TopContentContainer>
            <TabContainer>
               <Tab
                  baseValue="Все товары"
                  variant="variant"
                  tabsArray={tabsArray}
               />
            </TabContainer>
         </FirsContentContainer>
         <SecondContentContainer>
            <Infographic />
         </SecondContentContainer>
      </Container>
   )
}

export default ProductsPage

const SearchContainer = styled.div`
   border: 1px solid #cdcdcd;
   border-radius: 10px;
   display: flex;
   align-items: center;
   :focus {
      border: 1x solid white;
      outline: none;
   }

   svg {
      margin-right: 10px;
   }
`

const SearchInput = styled.input`
   width: 450px;
   height: 40px;
   background: transparent;
   padding: 10px 18px;
   border: none;
   :focus {
      border: 1x solid white;
      outline: none;
   }
   ::placeholder {
      color: #91969e;
   }
`
const Container = styled.div`
   display: flex;
   justify-content: space-between;
`
const StyledButtonContainer = styled.div`
   display: flex;
   gap: 20px;
   height: 45px;
   & a {
      text-decoration: none;
   }
`
const FirsContentContainer = styled.div`
   width: 80%;
   padding-right: 60px;
`
const TopContentContainer = styled.div`
   display: flex;
   justify-content: space-between;
`
const SecondContentContainer = styled.div`
   width: 22%;
`
const TabContainer = styled.div`
   margin-top: 40px;
`
