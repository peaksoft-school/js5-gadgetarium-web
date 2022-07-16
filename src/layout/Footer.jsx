import React from 'react'

import { styled } from '@mui/material'
import { Link } from 'react-router-dom'

import logo from '../assets/icons/footer-logo.svg'
import clockIcon from '../assets/icons/icon-clock.svg'
import gpsIcon from '../assets/icons/icon-gps.svg'
import messageIcon from '../assets/icons/icon-message.svg'
import numberIcon from '../assets/icons/icon-number.svg'
import Button from '../components/UI/Button'
import Input from '../components/UI/inputs/Input'

const Footer = () => {
   return (
      <FooterContainer>
         <BoxCategories>
            <BoxLinks>
               <Catalog>
                  <Link to="/catalog">
                     <Title> Каталог </Title>
                  </Link>
                  <Link to="/smartphones"> Смартфоны </Link>
                  <Link to="/laptops"> Ноутбуки и планшеты </Link>
                  <Link to="/watches"> Смарт-часы и браслеты </Link>
                  <Link to="/accesories"> Акссесуары </Link>
               </Catalog>
               <BeWithUs>
                  <Link to="/catalog">
                     <Title> Будь с нами </Title>
                  </Link>
                  <Link to="/sales"> Акции </Link>
                  <Link to="/novelties"> Новинки </Link>
                  <Link to="/popular-categories"> Популярыне категории </Link>
               </BeWithUs>
               <Services>
                  <Link to="/catalog">
                     <Title> Помощь и сервисы </Title>
                  </Link>
                  <Link to="/about-store"> О Магазине </Link>
                  <Link to="/delivery"> Доставка </Link>
                  <Link to="/faq"> FAQ </Link>
                  <Link to="/contacts"> Контакты </Link>
               </Services>
            </BoxLinks>
            <ContactsBox>
               <Distribution>
                  <Title> Расскажем об акциях и скидках </Title>
                  <div>
                     <Input
                        width="240px"
                        height="39px"
                        border-radius="4px 0 0 4px"
                     />
                     <Button width="160px" height="39px">
                        Подписаться
                     </Button>
                  </div>
                  <p>
                     Нажимая на кнопку «подписаться» Вы соглашаетесь на
                     обработку персональных данных
                  </p>
               </Distribution>
               <Contacts>
                  <Link to="/number">
                     <Icons src={numberIcon} />
                     <p> +996 (400) 00 00 00 </p>
                  </Link>
                  <Link to="/gadgetarium">
                     <Icons src={messageIcon} />
                     <p> Gadgetarium.kg </p>
                  </Link>
                  <Link to="/address">
                     <Icons src={gpsIcon} />
                     <p> г.Бишкек, ул. Гражданская 119 </p>
                  </Link>
                  <Link to="/">
                     <Icons src={clockIcon} />
                     <p> С 10:00 до 21:00 (без выходных) </p>
                  </Link>
               </Contacts>
            </ContactsBox>
         </BoxCategories>
         <MiddleLine />
         <CopyrightBox>
            <Logo src={logo} />
            <Copyright>
               © 2022 Gadgetarium. Интернет магазин Все права защищены.
            </Copyright>
         </CopyrightBox>
      </FooterContainer>
   )
}

export default Footer

const FooterContainer = styled('div')`
   width: 1920px;
   height: 600px;
   padding: 60px 195px 40px;
   background: #1a1a25;
   box-shadow: 0px 10px 50px rgba(133, 143, 164, 0.05);
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin-top: auto;
`
const BoxCategories = styled('div')`
   display: flex;
   justify-content: space-between;
`
const BoxLinks = styled('div')`
   display: flex;
   height: 300px;
   gap: 90px;
`
const ContactsBox = styled('div')`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`
const CopyrightBox = styled('div')`
   height: 95px;
   display: flex;
   flex-direction: column;
   gap: 20px;
   justify-content: space-between;
   align-items: center;
`
const MiddleLine = styled('div')`
   width: 1530px;
   height: 1px;
   background: rgba(133, 143, 164, 0.15);
`
const Title = styled('span')`
   color: #ffffff;
   margin-bottom: 15px;
   cursor: pointer;
`
const Catalog = styled('div')`
   width: 210px;
   height: 171px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 20px;
   a {
      color: #858fa4;
      text-decoration: none;
   }
   a:hover {
      color: #ffffff;
      transition: 0.4s;
      cursor: pointer;
   }
`
const BeWithUs = styled('div')`
   width: 210px;
   height: 138px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 19px;
   a {
      color: #858fa4;
      text-decoration: none;
   }
   a:hover {
      color: #ffffff;
      transition: 0.4s;
      cursor: pointer;
   }
`
const Services = styled('div')`
   width: 210px;
   height: 171px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 19px;
   a {
      color: #858fa4;
      text-decoration: none;
   }
   a:hover {
      color: #ffffff;
      transition: 0.4s;
      cursor: pointer;
   }
`
const Contacts = styled('div')`
   width: 300px;
   height: 132px;
   color: #858fa4;
   display: flex;
   flex-direction: column;
   align-items: centers;
   gap: 18px;
   a {
      text-decoration: none;
      display: flex;
      gap: 15px;
   }
   p {
      color: #858fa4;
      line-height: 23px;
   }
   p:hover {
      transition: 0.4s;
      cursor: pointer;
   }
`
const Icons = styled('img')`
   width: 20px;
   height: 20px;
`
const Distribution = styled('div')`
   width: 428px;
   height: 136px;
   color: #858fa4;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   p {
      margin-top: 10px;
      line-height: 20px;
      color: #ffffff;
      font-size: 14px;
   }
   input,
   button {
      font-size: 16px;
   }
`
const Logo = styled('img')`
   width: 221px;
   height: 40px;
`
const Copyright = styled('p')`
   width: 278px;
   height: 40px;
   font-size: 14px;
   color: #858fa4;
   line-height: 20px;
   text-align: center;
`