import { useState } from 'react'

import {
   FormControl,
   FormControlLabel,
   Radio,
   RadioGroup,
   styled,
} from '@mui/material'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'

import CATEGORIES from '../../../assets/data/categories'
import Iphone from '../../../assets/images/Samsung.png'
import Sorting from '../../../components/client/Sorting'
import BreadCrumbs from '../../../components/UI/Bredcrumbs'
import Card from '../../../components/UI/card/Card'
import {
   CATEGORY,
   SUBCATEGORY,
   SUBCATEGORYID,
} from '../../../components/UI/Catalogbutton'
// import PopUp from '../../../components/UI/PopUp'
// import { getAllCategories } from '../../../store/actions/CatalogActions'

import Character from './CatalogCharacter'
import CharacterDiv from './CharacterDiv'

// import Sorting from 'c:/users/techline/desktop/sorting'

const Catalog = () => {
   const [searchParam, setSearchParam] = useSearchParams()
   const [param] = useState(searchParam.get(CATEGORY))
   const [subParam, setSubParam] = useState(searchParam.get(SUBCATEGORY))
   // const navigate = useNavigate()

   const [categories] = useState(CATEGORIES.filter((e) => param === e.name))
   const [cat, setCateg] = useState(true)

   const [, setFilters] = useState()

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
   // useEffect(() => {}, [filters])
   // console.log(filters)
   // const onChangeFilters = (value, checked, key) => {
   //    // console.log(value, checked, key)
   //    // const { value, checked } = event.target
   //    // console.log(value, checked)
   //    // const updatedFilters = [...filters, { key: keyName, values: name }]
   //    // const filteredKeyObj = updatedFilters.filter((el) => el.key === keyName)
   //    // if (filteredKeyObj) {
   //    //    filteredKeyObj.foreach((el) => el.value.push(name))
   //    //    setFilters(filteredKeyObj)
   //    //    // console.log(filters)
   //    // } else {
   //    // setFilters([...filters, { key: keyName, values: name }])
   //    // }
   // }

   const subCategChange = (id, name) => {
      console.log(id)
      searchParam.set(SUBCATEGORYID, id)
      searchParam.set(SUBCATEGORY, name)
      setSearchParam(searchParam)
      setSubParam(searchParam.get(SUBCATEGORY))
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
                        showDiv={showCatalog}
                        name="Категории"
                        show={cat}
                     >
                        <FormControl>
                           <RadioGroup value={subParam}>
                              {categories.map((el) =>
                                 el.subCategories.map((e) => (
                                    <FormControlLabel
                                       style={labelStyle}
                                       value={e.name}
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
                                 ))
                              )}
                           </RadioGroup>
                        </FormControl>
                     </CharacterDiv>
                     {categories.map((el) =>
                        el.filters.map((e) => (
                           <Character
                              setShow={setCateg}
                              name={e.key}
                              setCheckbox={setFilters}
                              // key={e.key}
                              show={cat}
                              character={e.values}
                           />
                        ))
                     )}
                  </section>
               </FilterZone>
            </div>
            <Section>
               <Filter>
                  <section>
                     {selects.map((el) => (
                        <Selected>
                           {el.name}
                           <p>&#10006;</p>
                        </Selected>
                     ))}
                  </section>
                  <Sorting />
               </Filter>

               <CardList>
                  {examples.map((el) => (
                     <Card
                        action={el.action}
                        // compareProducts
                        //  balance
                        // addToFavotites
                        //  like
                        img={el.img}
                        status={el.status}
                        title={el.title}
                        rating={el.rating}
                        actualprice={el.actualprice}
                        noneactualprice={el.noneactualprice}
                        // addToCart
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
const examples = [
   {
      action: '-10%',
      id: 4,
      img: Iphone,
      status: 'В наличии (54)',
      title: 'Samsung Galaxy S21 128gb синий 9(MLP3RU...',
      rating: '3',
      actualprice: '54 190 с',
      noneactualprice: '57 190 с',
   },
   {
      action: '-10%',
      id: 5,
      img: Iphone,
      status: 'В наличии (54)',
      title: 'Samsung Galaxy S21 128gb синий 9(MLP3RU...',
      rating: '3',
      actualprice: '54 190 с',
      noneactualprice: '57 190 с',
   },
   {
      action: '-10%',
      id: 6,
      img: Iphone,
      status: 'В наличии (54)',
      title: 'Samsung Galaxy S21 128gb синий 9(MLP3RU...',
      rating: '3',
      actualprice: '54 190 с',
      noneactualprice: '57 190 с',
   },
   {
      action: '-10%',
      id: 98,
      img: Iphone,
      status: 'В наличии (54)',
      title: 'Samsung Galaxy S21 128gb синий 9(MLP3RU...',
      rating: '3',
      actualprice: '54 190 с',
      noneactualprice: '57 190 с',
   },
   {
      action: '-10%',
      id: 43,
      img: Iphone,
      status: 'В наличии (54)',
      title: 'Samsung Galaxy S21 128gb синий 9(MLP3RU...',
      rating: '3',
      actualprice: '54 190 с',
      noneactualprice: '57 190 с',
   },
   {
      action: '-10%',
      id: 28,
      img: Iphone,
      status: 'В наличии (54)',
      title: 'Samsung Galaxy S21 128gb синий 9(MLP3RU...',
      rating: '3',
      actualprice: '54 190 с',
      noneactualprice: '57 190 с',
   },
   {
      action: '-10%',
      id: 7,
      img: Iphone,
      status: 'В наличии (54)',
      title: 'Samsung Galaxy S21 128gb синий 9(MLP3RU...',
      rating: '3',
      actualprice: '54 190 с',
      noneactualprice: '57 190 с',
   },
   {
      action: '-10%',
      id: 9,
      img: Iphone,
      status: 'В наличии (54)',
      title: 'Samsung Galaxy S21 128gb синий 9(MLP3RU...',
      rating: '3',
      actualprice: '54 190 с',
      noneactualprice: '57 190 с',
   },
]
const selects = [
   {
      id: 1,
      name: 'Apple',
   },
   {
      id: 2,
      name: 'Apple',
   },
   {
      id: 3,
      name: 'Apple',
   },
]
const Filter = styled('div')`
   justify-content: space-between;
   align-items: center;
   display: flex;
`
const Selected = styled('div')`
   width: auto;
   height: 32px;
   background: #e8e8e8;
   border: 1px solid #cdcdcd;
   border-radius: 4px;
   display: flex;
   margin: 0px 5px;
   justify-content: space-around;
   align-items: center;
   padding: 0px 10px;
   p {
      margin: 0px 5px;
      cursor: pointer;
   }
`
const Section = styled('div')`
   width: 80%;
   section {
      display: flex;
      justify-content: flex-start;
      margin: 10px 0px;
   }
`
// const color = [
//    {
//       id: 1,
//       name: 'Black',
//    },
//    {
//       id: 2,
//       name: 'Black',
//    },
//    {
//       id: 3,
//       name: 'Black',
//    },
//    {
//       id: 4,
//       name: 'Black',
//    },
//    {
//       id: 5,
//       name: 'Black',
//    },
//    {
//       id: 6,
//       name: 'Black',
//    },
// ]
// const Rotate = styled('img')`
//    transform: rotate(180deg);
// `
// const example = [
//    {
//       id: 1,
//       name: 'Apple',
//    },
//    {
//       id: 2,
//       name: 'Samsung',
//    },
//    {
//       id: 3,
//       name: 'Xiaomi',
//    },
//    {
//       id: 4,
//       name: 'HUAWEI',
//    },
//    {
//       id: 5,
//       name: 'HONOR',
//    },
//    {
//       id: 6,
//       name: 'Nokia',
//    },
//    {
//       id: 7,
//       name: 'Oppo',
//    },
//    {
//       id: 8,
//       name: 'Телефоны-раскладушки',
//    },
//    {
//       id: 9,
//       name: 'Кнопочные телефоны',
//    },
//    {
//       id: 10,
//       name: 'Аксессуары для телефонов',
//    },
// ]
// const Show = styled('div')`
//    display: flex;
//    cursor: pointer;
//    justify-content: space-between;
//    align-items: center;
// `
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
// const Div = styled('div')`
//    border-top: 1px solid #e8e8e8;
//    /* border-bottom: 1px solid #e8e8e8; */
//    margin: 10px 0px;
//    padding: 10px 0px;
// `
// const checktext = {
//    fontFamily: 'Inter',
//    fontStyle: 'normal',
//    fontWeight: '400',
//    fontSize: '16px',
//    lineHeight: '140%',
//    color: '#292929',
//    display: 'flex',
//    justifyContent: 'flex-start',
//    alignItems: 'center',
//    padding: '0px',
// }
const CardList = styled('div')`
   /* width: 90%; */
   margin: 0px auto;
   display: flex;
   justify-content: flex-end;
   flex-wrap: wrap;
`
const FilterZone = styled('div')`
   /* width: 20%; */
   /* background: #ffffff; */
   border-radius: 4px;
   section {
      width: 90%;
      margin: 20px auto;
   }
`
// const check = {
//    color: ' #909CB5',
//    '&.Mui-checked': {
//       color: '#CB11AB',
//    },
//    '&input': {
//       backgroundColor: 'red',
//    },
// }
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

// const Input = styled('div')`
//    & input {
//       appearance: none;
//       border: 1px solid #d3d3d3;
//       width: 20px;
//       height: 20px;
//       /* content: none;
//       outline: none; */
//       margin: 0;
//       cursor: pointer;
//       /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
//    }
//    & input:checked {
// eslint-disable-next-line max-len
//       background: url('https://flyclipart.com/ru/white-hammer-clip-art-at-clker-hammer-vector-white-texture-white-board-text-hd-png-download-1033562');
//       background-repeat: no-repeat;
//       background-position: center center;
//       background-size: 30px 30px;
//       background-color: #cb11ab;
//    }
// `
