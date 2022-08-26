import styled from '@emotion/styled/'

import IphoneImg from '../../../assets/images/Phone.png'
// import slidePhone from '../../../assets/images/slidePhone.png'
// import slidePhoneTwo from '../../../assets/images/slidePhoneds.png'
import Button from '../../../components/UI/Button'
import Card from '../../../components/UI/card/Card'
import Carousel from '../../../components/UI/Carousel'
import InfoCards from '../../../components/UI/InfoCards'
// import Pictures from '../../../components/UI/Pictures'
// import Slider from '../../../components/UI/Slider'
// import Layout from '../layout/layout'

const data = [
   {
      id: 1,
      action: '-10%',
      img: IphoneImg,
      status: 'В наличии',
      title: 'Смартфон Apple iPhone 13 256gb',
      rating: 5,
      actualprice: 78000,
      noneactualprice: 80000,
   },
   {
      id: 2,
      action: '-20%',
      img: IphoneImg,
      status: 'В наличии',
      title: 'Смартфон Apple iPhone 13 256gb',
      rating: 2,
      actualprice: 78000,
      noneactualprice: 80000,
   },
   {
      id: 3,
      action: '-10%',
      img: IphoneImg,
      status: 'В наличии',
      title: 'Смартфон Apple iPhone 13 256gb',
      rating: 3,
      actualprice: 78000,
      noneactualprice: 80000,
   },
   {
      id: 4,
      action: '-10%',
      img: IphoneImg,
      status: 'В наличии',
      title: 'Смартфон Apple iPhone 13 256gb',
      rating: 4,
      actualprice: 78000,
      noneactualprice: 80000,
   },
   {
      id: 5,
      action: '-10%',
      img: IphoneImg,
      status: 'В наличии',
      title: 'Смартфон Apple iPhone 13 256gb',
      rating: 5,
      actualprice: 78000,
      noneactualprice: 80000,
   },
]
// const imgs = [
//    {
//       id: 1,
//       url: 'https://www.apple.com/ru/i
// phone-13/images/overview/hero/hero_1_static__d195o2nfxt26_large.jpg',
//    },
//    {
//       id: 2,
//       url: 'https://media.wired.com/photos/5f91e9488401fee4b39a2c84/191:100/w_1280,c
// _limit/Gear-Buying-Guide-iPhone-12_family-lineup.jpg',
//    },
//    {
//       id: 3,
//       url: 'https://www.apple.com/kg/iphone/home/images/meta/iphone__btp62hy2cbea_og.png',
//    },
// ]
const MainPage = () => {
   return (
      <div>
         {/* <Layout> */}
         <StyledSlider>
            {/* <div>
               <img src={slidePhone} alt="" />
               <img src={slidePhoneTwo} alt="" />
            </div> */}
            <Carousel />
         </StyledSlider>
         <CardContainer>
            <Styled> Акции</Styled>
            <StyledCard>
               {data.map((data) => {
                  return (
                     <div key={data.id}>
                        <Card
                           id={data.id}
                           action={data.action}
                           img={data.img}
                           status={data.status}
                           title={data.title}
                           rating={data.rating}
                           actualprice={data.actualprice}
                           noneactualprice={data.noneactualprice}
                        />
                     </div>
                  )
               })}
            </StyledCard>
            <StyledButton>
               <Button variant="outlined" width="300px">
                  Показать еще
               </Button>
            </StyledButton>
            <Styled> Новинки</Styled>
            <StyledCard>
               {data.map((data) => {
                  return (
                     <div key={data.id}>
                        <Card
                           id={data.id}
                           action={data.action}
                           img={data.img}
                           status={data.status}
                           title={data.title}
                           rating={data.rating}
                           actualprice={data.actualprice}
                           noneactualprice={data.noneactualprice}
                        />
                     </div>
                  )
               })}
            </StyledCard>
            <StyledButton>
               <Button variant="outlined" width="300px">
                  Показать еще
               </Button>
            </StyledButton>
            <Styled> Мы рекомендуем</Styled>
            <StyledCard>
               {data.map((data) => {
                  return (
                     <div key={data.id}>
                        <Card
                           id={data.id}
                           action={data.action}
                           img={data.img}
                           status={data.status}
                           title={data.title}
                           rating={data.rating}
                           actualprice={data.actualprice}
                           noneactualprice={data.noneactualprice}
                        />
                     </div>
                  )
               })}
            </StyledCard>
            <StyledButton>
               <Button variant="outlined" width="300px">
                  Показать еще
               </Button>
            </StyledButton>
            <StyledContainer>
               <InfoCards />
            </StyledContainer>
         </CardContainer>
         {/* </Layout> */}
      </div>
   )
}
export default MainPage

const StyledSlider = styled('div')`
   margin-top: 30px;
   background: #dedfe7;
`
const CardContainer = styled('div')`
   margin: auto;
   margin-top: 120px;
`
const Styled = styled('h3')`
   font-family: 'Ubuntu';
   font-style: normal;
   font-weight: 500;
   font-size: 30px;
   line-height: 110%;
`
const StyledCard = styled('div')`
   margin-top: 40px;
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   grid-template-rows: auto;
   grid-column-gap: 10px;
   grid-row-gap: 10px;
`
const StyledButton = styled('div')`
   display: flex;
   justify-content: center;
   margin-top: 40px;
`
const StyledContainer = styled('div')`
   display: flex;
   justify-content: center;
   margin-top: 120px;
`
