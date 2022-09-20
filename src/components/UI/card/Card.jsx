import Rating from '@mui/material/Rating'
import styled from 'styled-components'

import { ReactComponent as Busket } from '../../../assets/icons/busket.svg'
import { ReactComponent as Recommend } from '../../../assets/icons/recommend.svg'
import Button from '../Button'
import Tooltip from '../Tooltip'

import { Balance, Like } from './CardIcons'

const renderCardByState = (param) => {
   switch (param) {
      case 'NEW':
         return (
            <CardHeaderItemsAction style={{ background: '#2FC509' }}>
               <span>New</span>
            </CardHeaderItemsAction>
         )
      case 'DISCOUNT':
         return (
            <CardHeaderItemsAction style={{ background: '#F10000CC' }}>
               <span>{param.discount > 0 && `-${param.discount}%`}</span>
            </CardHeaderItemsAction>
         )
      case 'RECCOMMEND':
         return (
            <CardHeaderItemsAction style={{ background: '#2C68F5E5' }}>
               <Recommend />
            </CardHeaderItemsAction>
         )
      default:
         return <div> </div>
   }
}

const Card = (props) => {
   return (
      <CardContainer>
         <CardHeaderItems>
            {renderCardByState(props.sort)}
            <CardHeaderItemsIcons>
               <li onClick={props.compareProducts}>
                  <Tooltip title="Добавить в сравнение">
                     <div>
                        <Balance
                           fill={props.comparison ? '#CB11AB' : '#aaB1bf'}
                        />
                     </div>
                  </Tooltip>
               </li>
               <li onClick={props.addToFavorites}>
                  <Tooltip title="Добавить в избранное">
                     <div>
                        <Like
                           fill={props.like ? '#f53b49' : 'transparent'}
                           stroke={props.like ? '#f53b49' : '#aaB1bf'}
                        />
                     </div>
                  </Tooltip>
               </li>
            </CardHeaderItemsIcons>
         </CardHeaderItems>
         <CardImage>
            <img src={props.img} alt={props.title} />
         </CardImage>
         <CardTitle>
            <StlyedCardParagraph>
               {props.status === 'YES'
                  ? `В наличии ${props.quantity ? `(${props.quantity})` : ''} `
                  : 'Нет в наличии'}
            </StlyedCardParagraph>
            <StyledCardHeader>{props.title}</StyledCardHeader>
            <StyledCardRating>
               <StyledCardRatingSpan>Рейтинг</StyledCardRatingSpan>
               <Rating
                  name="read-only"
                  value={props.rating}
                  readOnly
                  size="small"
               />
            </StyledCardRating>
         </CardTitle>
         <CardShopItems>
            {props.discount === 0 ? (
               <StyledCardPriceEmpty>
                  <StyledCardPriceActual>
                     {props.actualprice} с
                  </StyledCardPriceActual>
               </StyledCardPriceEmpty>
            ) : (
               <StyledCardPrice>
                  <StyledCardPriceActual>
                     {props.actualprice} с
                  </StyledCardPriceActual>
                  <StyledCardPriceNoneActual>
                     {props.noneactualprice} с
                  </StyledCardPriceNoneActual>
               </StyledCardPrice>
            )}
            <Button
               variant="contained"
               onClick={props.addToCart}
               startIcon={<Busket />}
            >
               В корзину
            </Button>
         </CardShopItems>
      </CardContainer>
   )
}

export default Card

const CardContainer = styled.div`
   display: flex;
   flex-direction: column;
   height: 500px;
   min-width: 315px;
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
   & img {
      height: 240px;
      width: 200px;
      object-fit: contain;
   }
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
   width: 240px;
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

const StyledCardPriceEmpty = styled.div`
   display: flex;
   align-items: center;
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
   border-radius: 50px;
   width: 36px;
   height: 36px;
   display: flex;
   align-items: center;
   justify-content: center;
   & span {
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      color: #ffffff;
   }
`
