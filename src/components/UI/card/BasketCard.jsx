import { Rating } from '@mui/material'
import styled from 'styled-components'

import Checkbox from '../Checkbox'

const BasketCard = (props) => {
   return (
      <CardWrapper>
         <Checkbox
            onChange={(event) => props.getProductId(event)}
            onClick={(event) => event.stopPropagation()}
            value={props.id}
         />
         <CardContainer>
            <CardImage>
               <img src={props.img} alt={props.title} />
            </CardImage>
            <CardTitle>
               <StyledCardHeader>{props.title}</StyledCardHeader>
               <StyledCardRating>
                  <StyledCardRatingSpan>Рейтинг</StyledCardRatingSpan>
                  <Rating
                     name="read-only"
                     value={props.rating}
                     readOnly
                     size="small"
                  />
                  {props.amountStars > 0 && <p>{`(${props.amountStars})`}</p>}
               </StyledCardRating>
               <StlyedCardParagraph>
                  {props.quantity > 0
                     ? `В наличии(${props.quantity})`
                     : 'Нет в наличии'}
               </StlyedCardParagraph>
               <StyledProductCode>
                  Код товара:
                  {props.productCode}
               </StyledProductCode>
            </CardTitle>
            <StyledCount>{props.price}с</StyledCount>
            <StyledDelete onClick={props.handleDeleteById}>
               × Удалить
            </StyledDelete>
         </CardContainer>
      </CardWrapper>
   )
}

export default BasketCard

const CardWrapper = styled.div`
   display: flex;
   align-items: center;
`
const CardContainer = styled.div`
   display: flex;
   width: 930px;
   height: 170px;
   background: #fff;
   border-radius: 4px;
   padding: 15px;
   transition: 0.5s ease;
   cursor: pointer;
   align-items: center;
   &:hover {
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
      transform: scale(10px);
   }
`
const CardImage = styled.div`
   display: flex;
   justify-content: flex-start;
   margin-right: 40px;
   margin-left: 20px;
   & img {
      height: 121px;
      width: 106px;
      object-fit: contain;
   }
`
const CardTitle = styled.div`
   display: flex;
   flex-direction: column;
   row-gap: 6px;
   width: 390px;
`
const StyledCardHeader = styled.h1`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   text-transform: capitalize;
   text-overflow: ellipsis;
   overflow: hidden;
   color: #292929;
   margin-left: 9px;
`
const StyledCardRatingSpan = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-size: 14px;
   color: #909cb5;
   margin-right: 10px;
`
const StyledCardRating = styled.div`
   display: flex;
   align-items: center;
   padding: 5px 10px;
`
const StlyedCardParagraph = styled.p`
   color: #2fc509;
   font-family: 'Inter';
   font-weight: 500;
   font-size: 12px;
   line-height: 15px;
   margin-bottom: 8px;
   margin-left: 9px;
`
const StyledProductCode = styled.p`
   font-size: 14px;
   font-family: 'Inter';
   font-style: normal;
   color: #384255;
   font-weight: 400;
   margin-left: 9px;
`
const StyledCount = styled.div`
   width: 213px;
   height: 50px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 10px;
`
const StyledDelete = styled.div`
   display: flex;
   align-items: center;
   color: #909cb5;
   width: 100px;
   height: 25px;
   margin-top: 115px;
   :hover {
      color: gray;
   }
`
