import { useState, useEffect } from 'react'

import { Checkbox, styled, InputLabel } from '@mui/material'
import { useDispatch } from 'react-redux'

import Arrow from '../../../assets/icons/pinkUp.svg'
// import Ok from '../../../assets/icons/галочка.svg'
import Iphone from '../../../assets/images/Samsung.png'
import BreadCrumbs from '../../../components/UI/Bredcrumbs'
import Card from '../../../components/UI/card/Card'
import PopUp from '../../../components/UI/PopUp'
import { getCategories } from '../../../store/actions/CatalogActions'

const Catalog = () => {
   const [show, setShow] = useState({
      category: true,
      price: false,
      color: false,
      memory: false,
      gb: false,
   })
   const dispatch = useDispatch()
   const [categories, setCategories] = useState()
   useEffect(() => {
      dispatch(getCategories(setCategories))
   }, [])
   console.log(categories)
   const showCategory = () => {
      setShow({ ...show, category: !show.category })
   }
   const showPrice = () => {
      setShow({ ...show, price: !show.price })
   }
   const showColor = () => {
      setShow({ ...show, color: !show.color })
   }
   const showMemory = () => {
      setShow({ ...show, memory: !show.memory })
   }
   const showGb = () => {
      setShow({ ...show, gb: !show.gb })
   }
   return (
      <div style={{ margin: '30px 0px' }}>
         <BreadCrumbs paths={crambs} />
         <Title>
            <h1>Cмартфоны</h1>
         </Title>
         <Container>
            <div style={{ width: '18%' }}>
               <Options>Найдено 167 Товаров</Options>
               <FilterZone>
                  <section>
                     <BlueText>Сбросить все фильтры</BlueText>
                     <Div>
                        <Show onClick={showCategory}>
                           <h4>Категория</h4>
                           {show.category && <img src={Arrow} alt="arrow" />}
                           {!show.category && (
                              <Rotate src={Arrow} alt="arrow" />
                           )}
                        </Show>
                        {show.category &&
                           example.map((el) => (
                              <InputLabel key={el.id} sx={checktext}>
                                 <Checkbox sx={check} />
                                 {el.name}
                              </InputLabel>
                           ))}
                     </Div>
                     <Div>
                        <Show onClick={showPrice}>
                           <h4>Стоимость</h4>
                           {show.price && <img src={Arrow} alt="arrow" />}
                           {!show.price && <Rotate src={Arrow} alt="arrow" />}
                        </Show>
                        {show.price && <div>стоимость</div>}
                     </Div>
                     <Div>
                        <Show onClick={showColor}>
                           <h4>Цвет</h4>
                           {show.color && <img src={Arrow} alt="arrow" />}
                           {!show.color && <Rotate src={Arrow} alt="arrow" />}
                        </Show>
                        {show.color && (
                           <>
                              {color.map((el) => (
                                 <InputLabel key={el.id} sx={checktext}>
                                    <Checkbox sx={check} />
                                    {el.name}
                                 </InputLabel>
                              ))}
                              <BlueText onClick={showColor}>
                                 &uarr;Скрыть
                              </BlueText>
                           </>
                        )}
                     </Div>
                     <Div>
                        <Show onClick={showMemory}>
                           <h4>Объем памяти (GB)</h4>
                           {show.memory && <img src={Arrow} alt="arrow" />}
                           {!show.memory && <Rotate src={Arrow} alt="arrow" />}
                        </Show>
                        {show.memory &&
                           gb.map((el) => (
                              <InputLabel key={el.id} sx={checktext}>
                                 <Checkbox sx={check} />
                                 {el.name}
                              </InputLabel>
                           ))}
                     </Div>
                     <Div>
                        <Show onClick={showGb}>
                           <h4>Объем оперативной памяти (GB)</h4>
                           {show.gb && <img src={Arrow} alt="arrow" />}
                           {!show.gb && <Rotate src={Arrow} alt="arrow" />}
                        </Show>
                        {show.gb &&
                           gb.map((el) => (
                              <InputLabel key={el.id} sx={checktext}>
                                 <Checkbox sx={check} />
                                 {el.name}
                              </InputLabel>
                           ))}
                     </Div>
                  </section>
               </FilterZone>
            </div>
            <Section>
               <section>
                  {filters.map((el) => (
                     <Selected>
                        {el.name}
                        <p>&#10006;</p>
                     </Selected>
                  ))}

                  <PopUp
                     variant="default"
                     icon="icon"
                     title="Сортировка"
                     list={popup}
                  />
               </section>
               <CardList>
                  {examples.map((el) => (
                     <Card
                        action={el.action}
                        compareProducts
                        //  balance
                        addToFavotites
                        //  like
                        img={el.img}
                        status={el.status}
                        title={el.title}
                        rating={el.rating}
                        actualprice={el.actualprice}
                        noneactualprice={el.noneactualprice}
                        addToCart
                     />
                  ))}
               </CardList>
            </Section>
         </Container>
      </div>
   )
}
export default Catalog

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
const filters = [
   {
      id: 1,
      name: 'Apple',
   },
]
const Selected = styled('div')`
   width: auto;
   height: 32px;
   background: #e8e8e8;
   border: 1px solid #cdcdcd;
   border-radius: 4px;
   display: flex;
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
      justify-content: space-between;
      margin: 10px 0px;
   }
`
const gb = [
   {
      id: 1,
      name: 8,
   },
   {
      id: 1,
      name: 16,
   },
   {
      id: 1,
      name: 32,
   },
   {
      id: 1,
      name: 64,
   },
]
const color = [
   {
      id: 1,
      name: 'Black',
   },
   {
      id: 2,
      name: 'Black',
   },
   {
      id: 3,
      name: 'Black',
   },
   {
      id: 4,
      name: 'Black',
   },
   {
      id: 5,
      name: 'Black',
   },
   {
      id: 6,
      name: 'Black',
   },
]
const Rotate = styled('img')`
   transform: rotate(180deg);
`
const example = [
   {
      id: 1,
      name: 'Apple',
   },
   {
      id: 2,
      name: 'Samsung',
   },
   {
      id: 3,
      name: 'Xiaomi',
   },
   {
      id: 4,
      name: 'HUAWEI',
   },
   {
      id: 5,
      name: 'HONOR',
   },
   {
      id: 6,
      name: 'Nokia',
   },
   {
      id: 7,
      name: 'Oppo',
   },
   {
      id: 8,
      name: 'Телефоны-раскладушки',
   },
   {
      id: 9,
      name: 'Кнопочные телефоны',
   },
   {
      id: 10,
      name: 'Аксессуары для телефонов',
   },
]
const Show = styled('div')`
   display: flex;
   cursor: pointer;
   justify-content: space-between;
   align-items: center;
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
const Div = styled('div')`
   border-top: 1px solid #e8e8e8;
   /* border-bottom: 1px solid #e8e8e8; */
   margin: 10px 0px;
   padding: 10px 0px;
`
const checktext = {
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '16px',
   lineHeight: '140%',
   color: '#292929',
   display: 'flex',
   justifyContent: 'flex-start',
   alignItems: 'center',
   padding: '0px',
}
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
const check = {
   color: ' #909CB5',
   '&.Mui-checked': {
      color: '#CB11AB',
   },
   '&input': {
      backgroundColor: 'red',
   },
}
const popup = [
   {
      list: 'Telephone',
      id: 3,
   },
]
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
   }
   border-bottom: 1px solid #cdcdcd;
   margin: 30px 0px;
   padding: 20px 0px;
`
const crambs = [
   {
      path: 'Главная',
      name: 'Главная',
   },
   {
      path: 'Смартфоны',
      name: 'Смартфоны',
   },
]
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
