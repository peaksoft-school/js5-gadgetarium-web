import { useState, useEffect } from 'react'

import {
   FormControl,
   FormControlLabel,
   Radio,
   RadioGroup,
   styled,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import CATEGORIES from '../../../assets/data/categories'
import Sorting from '../../../components/client/Sorting'
import BreadCrumbs from '../../../components/UI/Breadcrumbs'
import Card from '../../../components/UI/card/Card'
import {
   CATEGORY,
   SUBCATEGORY,
   SUBCATEGORYID,
} from '../../../components/UI/Catalogbutton'
import RangeSlider from '../../../components/UI/RangeSlider'
import { getProductsCatalog } from '../../../store/actions/CatalogActions'
import {
   addToComparison,
   removeCompareProduct,
} from '../../../store/actions/comparisonActions'
import {
   addWishProducts,
   deleteWishProducts,
} from '../../../store/actions/wishListActions'

import Character from './CatalogCharacter'
import CharacterDiv from './CharacterDiv'

const Catalog = () => {
   const [searchParam, setSearchParam] = useSearchParams()
   const [param] = useState(searchParam.get(CATEGORY))
   const [subParam, setSubParam] = useState(searchParam.get(SUBCATEGORY))
   const [fromto, setFromTo] = useState({})
   const [filtered, setFiltered] = useState([])
   const [queryParams, setQueryParams] = useState({
      search: 'all',
      subCategoryId: searchParam.get(SUBCATEGORYID),
      priceFrom: null,
      priceTo: null,
      sort: null,
      page: 1,
      size: 5,
      filter: null,
   })
   const navigate = useNavigate()
   const products = useSelector((state) => state.catalogSlice.products)

   const [categories] = useState(CATEGORIES.filter((e) => param === e.name))
   const { jwt, id } = useSelector((state) => state.auth.user)
   const [cat, setCateg] = useState(true)
   const [showPrice, setShowPrice] = useState(true)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getProductsCatalog(queryParams))
   }, [queryParams])

   const showCatalog = () => setCateg((prev) => !prev)

   const crambs = [
      {
         path: 'Главная',
         name: 'Главная',
      },
      {
         path: param,
         name: param,
      },
   ]

   useEffect(() => {
      filterChange(filtered)
   }, [filtered])

   const filterChange = (filter) => {
      setQueryParams((prev) => {
         return { ...prev, filter: [...filter] }
      })
   }

   const subCategChange = (id, name) => {
      searchParam.set(SUBCATEGORYID, id)
      searchParam.set(SUBCATEGORY, name)
      setSearchParam(searchParam)
      setSubParam(searchParam.get(SUBCATEGORY))
      navigate({
         pathname: '/catalog',
         search: searchParam.toString(),
      })
      dispatch(getProductsCatalog({ search: 'all', subCategoryId: id }))
   }

   // ------------------------
   const onChangeFilter = (e, key) => {
      const { value, checked } = e.target
      if (checked) {
         if (!filtered.length) {
            return setFiltered([{ key, values: [value] }])
         }

         const isExist = filtered.find((f) => f.key === key)

         if (!isExist) {
            return setFiltered([...filtered, { key, values: [value] }])
         }

         const updatedFilters = filtered.map((element) => {
            if (element.key === key) {
               return { ...element, values: [...element.values, value] }
            }

            return element
         })

         return setFiltered(updatedFilters)
      }
      const updatedFiltered = filtered.filter((el) => {
         if (el.key === key) {
            if (el.values.indexOf(value) > -1) {
               return el.values.splice(el.values.indexOf(value), 1)
            }
            if (el.values.length === 0) {
               if (filtered.indexOf(el) > -1) {
                  return filtered.splice(filtered.indexOf(el), 1)
               }
            }
         }
         return el
      })
      return setFiltered(updatedFiltered)
   }
   const sliderChangeHandler = (from, to) => {
      setFromTo({ priceFrom: from, priceTo: to })
      setQueryParams({
         ...queryParams,
         priceFrom: fromto.priceFrom,
         priceTo: fromto.priceTo,
      })
   }
   const sortChangeHandler = (key, value) => {
      setQueryParams((prev) => {
         return {
            ...prev,
            [key]: value,
         }
      })
   }
   const addToFavorites = (productId, status) => {
      if (id) {
         if (status) {
            dispatch(deleteWishProducts({ id, productId, queryParams }))
         } else {
            dispatch(addWishProducts({ id, productId, queryParams }))
         }
      } else {
         toast.error('Пожалуйста сначало авторизуйтесь')
      }
   }
   const compareProducts = (id, status) => {
      if (jwt) {
         if (status) {
            dispatch(removeCompareProduct({ id, queryParams }))
         } else {
            dispatch(addToComparison({ id, queryParams }))
         }
      } else {
         toast.error('Пожалуйста сначало авторизуйтесь')
      }
   }
   const goToInnerPage = (id) => {
      navigate(`${param}/${id}`)
   }
   return (
      <div style={{ margin: '30px 0px' }}>
         <BreadCrumbs paths={crambs} />
         <Title>
            <h1>{param}</h1>
         </Title>
         <Container>
            <div style={{ width: '18%' }}>
               <Options>Найдено 167 Товаров</Options>
               <FilterZone>
                  <section>
                     <BlueText>Сбросить все фильтры</BlueText>
                     {/* Подкатегории */}
                     <CharacterDiv
                        showDiv={() => showCatalog(!cat)}
                        name="Категории"
                        show={cat}
                     >
                        {cat && (
                           <FormControl>
                              <RadioGroup value={subParam}>
                                 {categories[0].subCategories.map((e) => (
                                    <FormControlLabel
                                       style={labelStyle}
                                       value={e.name}
                                       key={e.name}
                                       control={
                                          <Radio
                                             sx={radio}
                                             onChange={() =>
                                                subCategChange(e.id, e.name)
                                             }
                                          />
                                       }
                                       label={e.name}
                                    />
                                 ))}
                              </RadioGroup>
                           </FormControl>
                        )}
                     </CharacterDiv>
                     <CharacterDiv
                        showDiv={() => setShowPrice((prev) => !prev)}
                        name="Стоимость"
                        show={showPrice}
                     >
                        {showPrice && (
                           <RangeSlider onChange={sliderChangeHandler} />
                        )}
                     </CharacterDiv>

                     {categories[0].filters.map((e) => (
                        <Character
                           key={e.key}
                           name={e.key}
                           onChangeFilter={onChangeFilter}
                           character={e.values}
                        />
                     ))}
                  </section>
               </FilterZone>
            </div>
            <Section>
               <Filter>
                  <Sorting onChange={sortChangeHandler} />
               </Filter>

               <CardList>
                  {products?.filtersProducts.map((data) => (
                     <Card
                        onClick={() => goToInnerPage(data.productId)}
                        id={data.productId}
                        action={data.action}
                        sort={data.sort}
                        compareProducts={() =>
                           compareProducts(
                              data.productId,
                              Boolean(data.comparison)
                           )
                        }
                        comparison={data.comparison}
                        like={data.like}
                        addToFavorites={() =>
                           addToFavorites(data.productId, Boolean(data.like))
                        }
                        discount={data.discount}
                        img={data.image}
                        quantity={data.quantity}
                        status={data.status}
                        title={data.nameMemoryColor}
                        rating={data.stars}
                        actualprice={data.price}
                        noneactualprice={data.currentPrice}
                     />
                  ))}
               </CardList>
            </Section>
         </Container>
      </div>
   )
}
export default Catalog
const radio = {
   color: ' #CB11AB',
   '&.Mui-checked': {
      color: ' #CB11AB',
   },
}
const labelStyle = {
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '16px',
   lineHeight: ' 140%',
   color: '#292929',
}
const Container = styled('div')`
   display: flex;
   justify-content: space-between;
`
const Filter = styled('div')`
   justify-content: flex-end;
   align-items: center;
   display: flex;
`
const Section = styled('div')`
   width: 80%;
   section {
      display: flex;
      justify-content: flex-start;
      margin: 10px 0px;
   }
`
const BlueText = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 140%;
   color: #2c68f5;
   cursor: pointer;
   padding: 16px 0px;
`
const CardList = styled('div')`
   margin-top: 30px;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: repeat(3, 1fr);
   grid-column-gap: 8px;
   grid-row-gap: 8px;
`
const FilterZone = styled('div')`
   border-radius: 4px;
   section {
      width: 90%;
      margin: 20px auto;
   }
`
const Options = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #91969e;
   margin: 10px 0px;
`
const Title = styled('div')`
   h1 {
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 500;
      font-size: 30px;
      line-height: 110%;
      :first-letter {
         text-transform: uppercase;
      }
   }
   border-bottom: 1px solid #cdcdcd;
   margin: 30px 0px;
   padding: 20px 0px;
`
