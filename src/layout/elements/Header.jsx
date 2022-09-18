import React from 'react'

import { styled } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'

import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import logo from '../../assets/icons/logo.svg'
import menu from '../../assets/icons/menu.svg'
import whatsapp from '../../assets/icons/whatsapp.svg'
import UserProfile from '../../components/client/UserProfile'
import UserTools from '../../components/client/UserTools'

const Header = () => {
   return (
      <HeaderContainer>
         <HeaderTop>
            <UpperRow>
               <Link to="/">
                  <Logo src={logo} />
               </Link>
               <MenuNavBar>
                  <li>
                     <StyledNavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        end
                     >
                        Главная
                     </StyledNavLink>
                  </li>
                  <li>
                     <StyledNavLink to="about"> О магазине </StyledNavLink>{' '}
                  </li>
                  <li>
                     <StyledNavLink to="delivery"> Доставка </StyledNavLink>
                  </li>
                  <li>
                     <StyledNavLink to="faq"> FAQ </StyledNavLink>
                  </li>
                  <li>
                     <StyledNavLink to="contacts"> Контакты </StyledNavLink>{' '}
                  </li>
               </MenuNavBar>
               <UserProfile />
            </UpperRow>
            <MiddleLine />
         </HeaderTop>
         <NavBar>
            <BottomRow>
               <StyledLink to="catalog">
                  <Catalog>
                     <img src={menu} alt="#" />
                     Каталог
                  </Catalog>
               </StyledLink>
               <VerticalLine />
               <SearchInput
                  padding="2em"
                  placeholder="Поиск по каталогу магазина"
               />
               <SocialLinks>
                  <NavLink to="">
                     <ImageBox src={facebook} />
                  </NavLink>
                  <NavLink to="">
                     <ImageBox src={instagram} />
                  </NavLink>
                  <NavLink to="">
                     <ImageBox src={whatsapp} />
                  </NavLink>
               </SocialLinks>
               <UserTools />
            </BottomRow>
         </NavBar>
      </HeaderContainer>
   )
}

export default Header

const HeaderTop = styled('header')`
   max-width: 1920px;
   margin-left: auto;
   margin-right: auto;
   height: 82px;
   padding: 18px 100px;

   @media (max-width: 1536px) {
      max-width: 1440px;
      padding: 18px 30px;
   }

   @media (max-width: 1240px) {
      max-width: 1200px;
      padding: 18px 30px;
   }
`
const HeaderContainer = styled('div')`
   width: 100%;
   background: #1a1a25;
`
const UpperRow = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 0 20px 0;
`
const NavBar = styled('nav')`
   max-width: 1920px;
   margin-left: auto;
   margin-right: auto;
   height: 90px;
   padding: 18px 100px;
   background: #1a1a25;
   position: sticky;
   top: 0;
   z-index: 99;

   @media (max-width: 1536px) {
      max-width: 1440px;
      padding: 18px 30px;
   }
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

   @media (max-width: 1536px) {
      width: 600px;
   }
`
const SocialLinks = styled('div')`
   width: 115px;
   height: 30px;
   display: flex;
   justify-content: space-between;
`
const Logo = styled('img')`
   width: 221px;
   height: 39px;
   cursor: pointer;
`
const StyledNavLink = styled(NavLink)`
   width: 100%;
   display: flex;
   align-items: center;
   color: #fff;
   font-size: 16px;
   text-decoration: none;
   padding: 14px 12px;
   &:hover {
      transition: 0.3s;
      border-radius: 4px;
      background: rgba(133, 143, 164, 0.15);
   }
   @media (max-width: 1536px) {
      font-size: 14px;
      padding: 12px 10px;
   }
`
const MenuNavBar = styled('ul')`
   list-style: none;
   display: flex;
   align-items: center;
   flex-direction: row;
   white-space: nowrap;
   gap: 8px;
   & li {
      width: 100%;
      color: #fff;
      font-size: 16px;
      border-radius: 4px;
   }

   .active {
      transition: 0.3s;
      border-radius: 4px;
      background: rgba(133, 143, 164, 0.15);
   }
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
   cursor: pointer;
   text-decoration: none;
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
const StyledLink = styled(Link)`
   text-decoration: none;
   color: white;
   padding: 2px;
`
