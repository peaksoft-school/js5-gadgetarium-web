import styled from 'styled-components'

import { ReactComponent as Busket } from '../../../assets/icons/busket.svg'
import Button from '../Button'

import { Balance, Like } from './CardIcons'
import CardRating from './CardRating'

const Card = (props) => {
   return (
      <CardBox>
         <CardContainer>
            <CardHeaderItems>
               <CardHeaderItemsAction>
                  <span>{props.action}</span>
               </CardHeaderItemsAction>
               <CardHeaderItemsIcons>
                  <li onClick={props.onClick}>
                     <Balance fill={props.balance ? '#CB11AB' : '#aaB1bf'} />
                  </li>
                  <li onClick={props.onClick}>
                     <Like
                        fill={props.like ? '#f53b49' : 'transparent'}
                        stroke={props.like ? '#f53b49' : '#aaB1bf'}
                     />
                  </li>
               </CardHeaderItemsIcons>
            </CardHeaderItems>
            <CardImage>
               <img src={props.img} alt={props.title} />
            </CardImage>
            <CardTitle>
               <StlyedCardParagraph>{props.status}</StlyedCardParagraph>
               <StyledCardHeader>{props.title}</StyledCardHeader>
               <StyledCardRating>
                  <StyledCardRatingSpan>Рейтинг</StyledCardRatingSpan>
                  <CardRating rating={props.rating} />
               </StyledCardRating>
            </CardTitle>
            <CardShopItems>
               <StyledCardPrice>
                  <StyledCardPriceActual>
                     {props.actualprice}
                  </StyledCardPriceActual>
                  <StyledCardPriceNoneActual>
                     {props.noneactualprice}
                  </StyledCardPriceNoneActual>
               </StyledCardPrice>
               <Button
                  variant="contained"
                  onClick={props.onClick}
                  startIcon={<Busket />}
               >
                  В корзину
               </Button>
            </CardShopItems>
         </CardContainer>
      </CardBox>
   )
}

export default Card

const CardContainer = styled.div`
   margin: 70px;
   display: flex;
   flex-direction: column;
   max-width: 300px;
   max-height: 500px;
   background: #fff;
   border-radius: 4px;
   padding: 15px;
   transition: 0.5s ease;
   cursor: pointer;
   &:hover {
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
      transform: scale(10px);
   }
`

const CardBox = styled.div``

const CardHeaderItems = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`

const CardImage = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 12px;
   width: 100%;
   height: 100%;
`

const StlyedCardParagraph = styled.p`
   color: #2fc509;
   font-family: 'Inter';
   font-weight: 500;
   font-size: 11px;
   line-height: 15px;
`

const StyledCardHeader = styled.h1`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 22px;
   text-transform: capitalize;
   text-overflow: ellipsis;
   overflow: hidden;
   color: #292929;
`
const CardTitle = styled.div`
   margin-top: 8px;
   display: grid;
   grid-template-columns: 1fr;
   grid-row-gap: 8px;
`

const StyledCardRatingSpan = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 12px;
   line-height: 15px;
   color: #909cb5;
   margin-right: 6px;
`

const StyledCardRating = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
`
const CardShopItems = styled.div`
   margin-top: 16px;
   display: flex;
   justify-content: space-between;
`

const StyledCardPrice = styled.div`
   display: flex;
   flex-direction: column;
   margin-left: 6px;
`

const StyledCardPriceActual = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 700;
   font-size: 18px;
   line-height: 130%;
   color: #1a1a25;
`

const StyledCardPriceNoneActual = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 135.94%;
   text-decoration-line: line-through;
   color: #858fa4;
`
const CardHeaderItemsIcons = styled.ul`
   list-style: none;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: 1fr;
   grid-column-gap: 16px;
   align-items: center;
   & svg {
      cursor: pointer;
   }
`

const CardHeaderItemsAction = styled.div`
   background: #f53b49;
   border-radius: 50px;
   width: 36px;
   height: 36px;
   display: flex;
   align-items: center;
   justify-content: center;
   & span {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 900;
      font-size: 12px;
      line-height: 15px;
      color: #ffffff;
   }
`
