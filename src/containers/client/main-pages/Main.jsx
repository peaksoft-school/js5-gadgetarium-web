import styled from '@emotion/styled/'

import IphoneImg from '../../../assets/images/Phone.png'
import Button from '../../../components/UI/Button'
import Card from '../../../components/UI/card/Card'
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
//       url: 'https://www.apple.com/kg/iphone/home/images/meta/iphone__btp62hy2cbea_og.png',
//    },
//    {
//       id: 2,
//       url: 'https://www.apple.com/kg/iphone/home/images/meta/iphone__btp62hy2cbea_og.png',
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
         {/* <StyledSlider>
            <Slider imgs={imgs} />
         </StyledSlider> */}
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
            <StyledContainer>{/* <Pictures /> */}</StyledContainer>
         </CardContainer>
         {/* </Layout> */}
      </div>
   )
}
export default MainPage
// const StyledSlider = styled('div')`
//    margin: auto;
//    margin-top: 30px;
// `
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
   margin-top: 20px;
`
const StyledContainer = styled('div')`
   display: flex;
   justify-content: center;
`
