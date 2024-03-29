import { useState } from 'react'

import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/icons/footer-logo.svg'
import clockIcon from '../../assets/icons/icon-clock.svg'
import gpsIcon from '../../assets/icons/icon-gps.svg'
import messageIcon from '../../assets/icons/icon-message.svg'
import numberIcon from '../../assets/icons/icon-number.svg'
import Button from '../../components/UI/Button'
import Input from '../../components/UI/inputs/Input'
import { subscribeForMailingList } from '../../store/slices/authSlice'

const Footer = () => {
   const [email, setEmail] = useState('')
   const [error, setError] = useState('')
   const dispatch = useDispatch()
   function onSubmit(e) {
      e.preventDefault()
      if (email) {
         dispatch(subscribeForMailingList(email))
         setError('')
      } else {
         setError('Введите свой email')
      }
   }

   const scrollTo = (value) => {
      window.scrollTo({
         top: value,
         behavior: 'smooth',
      })
   }
   return (
      <FooterPosition>
         <FooterContainer>
            <BoxCategories>
               <BoxLinks>
                  <BeWithUs>
                     <li>
                        <Title> Будь с нами </Title>
                     </li>
                     <li onClick={() => scrollTo(900)}>Акции</li>
                     <li onClick={() => scrollTo(1650)}>Новинки</li>
                     <li onClick={() => scrollTo(2400)}>Рекомендуемые</li>
                  </BeWithUs>
                  <Services>
                     <NavLink to="/catalog">
                        <Title> Помощь и сервисы </Title>
                     </NavLink>
                     <NavLink to="/about" onClick={() => scrollTo(0, 0)}>
                        О магазине
                     </NavLink>
                     <NavLink to="/delivery" onClick={() => scrollTo(0, 0)}>
                        Доставка
                     </NavLink>
                     <NavLink to="/faq" onClick={() => scrollTo(0, 0)}>
                        FAQ
                     </NavLink>
                     <NavLink to="/contacts" onClick={() => scrollTo(0, 0)}>
                        Контакты
                     </NavLink>
                  </Services>
               </BoxLinks>
               <ContactsBox>
                  <Distribution>
                     <Title> Расскажем об акциях и скидках </Title>
                     <InputButtonContainer>
                        <InputSubscribe
                           height="39px"
                           border-radius="4px 0 0 4px"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                        />
                        <ButtonSubscribe
                           width="160px"
                           height="39px"
                           onClick={(e) => onSubmit(e)}
                        >
                           Подписаться
                        </ButtonSubscribe>
                     </InputButtonContainer>
                     {error && <ErrorMessage>{error}</ErrorMessage>}
                     <p>
                        Нажимая на кнопку «подписаться» Вы соглашаетесь на
                        обработку персональных данных
                     </p>
                  </Distribution>
                  <Contacts>
                     <a href="tel: +996 500 34 44 33">
                        <Icons src={numberIcon} />
                        <p> +996 500 34 44 33 </p>
                     </a>
                     <a href="mailto:school@peaksoft.us">
                        <Icons src={messageIcon} />
                        <p> Gadgetarium.kg </p>
                     </a>
                     <div>
                        <Icons src={gpsIcon} />
                        <p> г.Бишкек, ул. Гражданская 119 </p>
                     </div>
                     <div>
                        <Icons src={clockIcon} />
                        <p> С 10:00 до 21:00 (без выходных) </p>
                     </div>
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
      </FooterPosition>
   )
}

export default Footer

const FooterPosition = styled('footer')`
   width: 100%;
   background: #1a1a25;
`

const FooterContainer = styled('div')`
   max-width: 1380px;
   margin-left: auto;
   margin-right: auto;
   height: 600px;
   padding: 60px 100px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin-top: auto;

   @media screen and (max-width: 1536px) {
      max-width: 1380px;
      padding: 60px 0 40px 0;
   }

   @media screen and (max-width: 1240px) {
      max-width: 1140px;
      padding: 60px 0 40px 0;
   }
`
const BoxCategories = styled('div')`
   display: flex;
   justify-content: space-between;
`
const BoxLinks = styled('div')`
   display: flex;
   height: 300px;
   gap: 120px;
   margin-right: 50px;
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
   height: 1px;
   background: rgba(133, 143, 164, 0.15);
`
const Title = styled('span')`
   color: #ffffff;
   margin-bottom: 15px;
   cursor: pointer;
`
const BeWithUs = styled('ul')`
   white-space: nowrap;
   height: 138px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 19px;
   li {
      color: #858fa4;
      text-decoration: none;
   }
   li:hover {
      color: #ffffff;
      transition: 0.4s;
      cursor: pointer;
   }
`
const Services = styled('div')`
   white-space: nowrap;
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
   div {
      display: flex;
      gap: 15px;
   }
   a {
      text-decoration: none;
      display: flex;
      gap: 15px;
   }
   div {
      color: #858fa4;
      line-height: 23px;
   }
`
const Icons = styled('img')`
   width: 20px;
   height: 20px;
`
const Distribution = styled('div')`
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
      width: 360px;
   }
`
const InputButtonContainer = styled('div')`
   display: flex;
`
const InputSubscribe = styled(Input)`
   height: 39px;
   border-radius: 4px 0 0 4px;
`
const ButtonSubscribe = styled(Button)`
   height: 39.5px;
   background: #e20fbe;
   border-radius: 0 4px 4px 0;
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
const ErrorMessage = styled('p')`
   color: red;
`
