import React from 'react'

import { styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

import compare from '../assets/icons/compare.svg'
import facebook from '../assets/icons/facebook.svg'
import favorites from '../assets/icons/favorites.svg'
import instagram from '../assets/icons/instagram.svg'
import logo from '../assets/icons/logo.svg'
import menu from '../assets/icons/menu.svg'
import profileLogo from '../assets/icons/profile-icon.svg'
import cart from '../assets/icons/shopping-cart.svg'
import whatsapp from '../assets/icons/whatsapp.svg'

const Header = () => {
   return (
      <>
         <HeaderTop>
            <UpperRow>
               <Logo src={logo} />
               <Menu>
                  <BackgroundButton>
                     <NavLink to="/main"> Главная </NavLink>
                  </BackgroundButton>
                  <BackgroundButton>
                     <NavLink to="/about"> О магазине </NavLink>
                  </BackgroundButton>
                  <BackgroundButton>
                     <NavLink to="/delivery"> Доставка </NavLink>
                  </BackgroundButton>
                  <BackgroundButton>
                     <NavLink to="/fag"> FAG </NavLink>
                  </BackgroundButton>
                  <BackgroundButton>
                     <NavLink to="/contacts"> Контакты </NavLink>
                  </BackgroundButton>
               </Menu>
               <UserProfile>
                  <p> +996 (400) 00-00-00 </p>
                  <NavLink to="/login">
                     <ProfileLogo src={profileLogo} />
                  </NavLink>
               </UserProfile>
            </UpperRow>
            <MiddleLine />
         </HeaderTop>
         <HeaderBottom>
            <BottomRow>
               <Catalog>
                  <img src={menu} alt="#" />
                  Каталог
               </Catalog>
               <VerticalLine />
               <SearchInput
                  padding="2em"
                  placeholder="Поиск по каталогу магазина"
               />
               <SocialLinks>
                  <NavLink to="/facebook">
                     <ImageBox src={facebook} />
                  </NavLink>
                  <NavLink to="/instagram">
                     <ImageBox src={instagram} />
                  </NavLink>
                  <NavLink to="/whatsapp">
                     <ImageBox src={whatsapp} />
                  </NavLink>
               </SocialLinks>
               <UserTools>
                  <NavLink to="/compare">
                     <ImageBox src={compare} />
                  </NavLink>
                  <NavLink to="/favorites">
                     <ImageBox src={favorites} />
                  </NavLink>
                  <NavLink to="/cart">
                     <ImageBox src={cart} />
                  </NavLink>
               </UserTools>
            </BottomRow>
         </HeaderBottom>
      </>
   )
}

export default Header

const HeaderTop = styled('div')`
   width: 1920px;
   height: 82px;
   padding: 18px 194px;
   background: #1a1a25;
`
const UpperRow = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 0 20px 0;
`
const HeaderBottom = styled('div')`
   width: 1920px;
   height: 90px;
   padding: 18px 194px;
   background: #1a1a25;
   position: sticky;
   z-index: 999;
   top: 0;
`
const BottomRow = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const MiddleLine = styled('div')`
   height: 1px;
   margin: -6px;
   background: rgba(133, 143, 164, 0.15);
`
const SearchInput = styled('input')`
   width: 784px;
   height: 40px;
   background: #1a1a25;
   padding: 0 15px;
   color: white;
   font-size: 14px;
   border: 1px solid white;
   border-radius: 10px;
   :focus {
      border: 1x solid white;
      outline: none;
   }
   ::placeholder {
      color: white;
   }
`
const SocialLinks = styled('div')`
   width: 115px;
   height: 30px;
   display: flex;
   justify-content: space-between;
`
const UserTools = styled(SocialLinks)`
   width: 115px;
`
const Logo = styled('img')`
   width: 221px;
   height: 39px;
`
const Menu = styled('div')`
   display: flex;
   justify-content: space-around;
   align-items: center;
   padding: 0;
   width: 511px;
   height: 46px;
   a {
      font-size: 16px;
      font-weight: 500;
      text-decoration: none;
      color: #ffffff;
   }
`
const BackgroundButton = styled('div')`
   padding: 13px 15px;
   border-radius: 4px;
   display: flex;
   align-items: center;
   justify-content: center;
   :hover {
      transition: 0.3s;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(133, 143, 164, 0.15);
   }
`
const UserProfile = styled('div')`
   width: 232px;
   height: 30px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   color: #ffffff;
`
const ProfileLogo = styled('img')`
   width: 24px;
   height: 24px;
`
const Catalog = styled('button')`
   width: 136px;
   height: 49px;
   background: #cb11ab;
   color: #ffffff;
   border-radius: 4px;
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   font-size: 16px;
`
const VerticalLine = styled('div')`
   width: 1.07px;
   height: 40px;
   background: rgba(133, 143, 164, 0.15);
`
const ImageBox = styled('img')`
   width: 24px;
   height: 24px;
`
