import React from 'react'

import { styled } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import regionMap from '../../assets/icons/Carta.svg'
import BreadCrumbs from '../../components/UI/Bredcrumbs'

const pathsArray = [
   {
      path: '/',
      name: 'Главная',
   },
   {
      path: '/about',
      name: 'О магазине',
   },
]

const settings = {
   showArrows: true,
   emulateTouch: false,
   infiniteLoop: true,
   showStatus: false,
   showThumbs: false,
   centerMode: true,
}

const AboutPage = () => {
   return (
      <div>
         <BreadCrumbs paths={pathsArray} />
         <Styled>
            <h2> О магазине</h2>
         </Styled>
         <Typography> Магазин Gadgetarium</Typography>
         <Contents>
            <li>
               Cлаженная команда людей, любящих спорт и здоровый образ жизни
               знающих свое дело и ориентирующихся во всех нюансах фитнес
               оборудования
            </li>
            <li>
               Широкая номенклатура качественной продукции ведущих мировых
               брендов с огромным выбором товаров в наличии;
            </li>
            <li>
               Склад запчастей для обеспечения качественного сервиса и
               бесперебойной работы оборудования;
            </li>
            <li>
               Полный послепродажный сервис с информационной и технической
               поддержкой;
            </li>
            <li>Строгое соблюдение всех обязательств перед партнерами; </li>
            <li>
               Отличные цены и эксклюзивные условия для постоянных партнеров.
            </li>
         </Contents>
         <Container>
            <Carousel {...settings}>
               <img
                  src="https://www.iphones.ru/wp-content/uploads/2021/04/U0A6290.jpeg"
                  alt=""
               />
               <img
                  src="http://e-finland.ru/media/cache/1f/54/1f54e7280bc393e2ca89047d9630ad2b.jpg"
                  alt=""
               />
               <img
                  src="https://techinworld.net/wp-content/uploads/2021/05/How-to-buy-an-iPhone-from-Apple-Store-Online-scaled.jpg"
                  alt=""
               />
            </Carousel>
         </Container>
         <div>
            <Typographys> В чем причина нашего успеха? </Typographys>
            <Text>
               Non ultricies sollicitudin nisi quisque. Morbi integer quis
               tincidunt vitae penatibus. Feugiat quis tincidunt volutpat
               scelerisque elit fermentum nullam rhoncus adipiscing. Sem tortor
               molestie odio.
               <br />
               Adipiscing etiam vitae in semper sed eget nec aliquet aliquam.
               Morbi integer quis tincidunt vitae penatibus. Feugiat quis
               tincidunt volutpat scelerisque elit fermentum nullam rhoncus
               adipiscing. Sem tortor molestie odio. Adipiscing etiam vitae in
               semper sed eget nec aliquet aliquam. Morbi integer quis tincidunt
               vitae penatibus. Feugiat quis tincidunt volutpat scelerisque elit
               fermentum nullam rhoncus adipiscing. Sem tortor molestie odio.
            </Text>
            <Text>
               Non ultricies sollicitudin nisi quisque. Morbi integer quis
               tincidunt vitae penatibus. Feugiat quis tincidunt volutpat
               scelerisque elit fermentum nullam rhoncus adipiscing. Sem tortor
               molestie odio. <br />
               Adipiscing etiam vitae in semper sed eget nec aliquet aliquam.
               Morbi integer quis tincidunt vitae penatibus. Feugiat quis
               tincidunt volutpat scelerisque elit fermentum nullam rhoncus
               adipiscing. Sem tortor molestie odio.Adipiscing etiam vitae in
               semper sed eget nec aliquet aliquam. Morbi integer quis tincidunt
               vitae penatibus. Feugiat quis tincidunt volutpat scelerisque elit
               fermentum nullam rhoncus adipiscing. Sem tortor molestie odio.
            </Text>
         </div>
         <Box>
            <div>
               <Typographys> Мы сегодня – это:</Typographys>
               <Content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  amet est orci volutpat placerat maecenas egestas augue ac.
                  Tortor, sed magnis interdum massa. Id phasellus lectus dui
                  nisl. Adipiscing etiam vitae in semper sed eget nec aliquet
                  aliquam.
               </Content>
               <Content>
                  Non ultricies sollicitudin nisi quisque. Morbi integer quis
                  tincidunt vitae penatibus. Feugiat quis tincidunt volutpat
                  scelerisque elit fermentum nullam rhoncus adipiscing. Sem
                  tortor molestie odio. Adipiscing etiam vitae in semper sed
                  eget nec aliquet aliquam. Morbi integer quis tincidunt vitae
                  penatibus. Feugiat quis tincidunt volutpat scelerisque elit
                  fermentum nullam rhoncus adipiscing. Sem tortor molestie odio
               </Content>
            </div>
            <StyledImg src={regionMap} alt="map" />
         </Box>
      </div>
   )
}

export default AboutPage

const Styled = styled('div')`
   padding: 30px 0px;
   border-bottom: 1px solid #cdcdcd;
   font-style: normal;
   font-weight: 500;
   font-size: 30px;
   line-height: 110%;
`
const Typography = styled('h3')`
   margin-top: 40px;
`
const Typographys = styled('h3')`
   margin-top: 60px;
`
const Contents = styled('ul')`
   width: 1020px;
   font-weight: 400px;
   font-size: 18px;
   line-height: 27px;
   margin-top: 24px;
   margin-left: 30px;
`
const Text = styled('p')`
   width: 1020px;
   font-weight: 400px;
   font-size: 18px;
   line-height: 27px;
   margin-top: 24px;
`
const Box = styled('div')`
   display: flex;
   justify-content: space-between;
`
const Content = styled('p')`
   width: 570px;
   font-weight: 400px;
   font-size: 18px;
   line-height: 27px;
   margin-top: 24px;
`

const StyledImg = styled('img')`
   width: 850px;
`

const Container = styled('main')`
   margin-top: 60px;
   .slide {
      transform: scale(0.9);
      transition: 0.35s;
   }
   .slide.selected {
      transform: scale(1);
   }

   img {
      width: 100%;
   }

   .Test {
      display: flex;
   }

   .carousel.carousel-slider {
      overflow: inherit;
   }

   .carousel .control-next.control-arrow,
   .carousel .control-next.control-arrow:hover {
      background-color: transparent;
   }

   .carousel .control-prev.control-arrow,
   .carousel .control-prev.control-arrow:hover {
      background-color: transparent;
   }

   .carousel .control-arrow,
   .carousel.carousel-slider .control-arrow {
      opacity: 1;
   }

   .carousel .control-next.control-arrow:before {
      content: '';
      border: solid #cb11ab;
      border-width: 0 8px 8px 0;
      border-radius: 8px;
      display: inline-block;
      padding: 14px;
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
   }

   .carousel .control-prev.control-arrow:before {
      content: '';
      border: solid #cb11ab;
      border-radius: 6px;
      border-width: 0 8px 8px 0;
      display: inline-block;
      padding: 14px;
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
   }
`
