import { IconButton, Rating } from '@mui/material'
import styled from 'styled-components'

import { ReactComponent as DeleteIcon } from '../../../assets/icons/Trash.svg'
import Button from '../../UI/Button'
import PreviewSlider from '../../UI/PreviewSlider'

const ProductContent = ({ images }) => {
   return (
      <Container>
         <LeftContent>
            <PreviewSlider images={images} />
         </LeftContent>
         <RightContent>
            <ProductNameHeader>Galaxy S21 5G</ProductNameHeader>
            <ProductInfoBlock>
               <StockInfo>В наличии</StockInfo>
               <ArcticleInfo>Артикул: 030696</ArcticleInfo>
               <RatingInfo>
                  <Rating readOnly size="small" name="read-only" value={4} />
                  <RatingCount>(56)</RatingCount>
               </RatingInfo>
            </ProductInfoBlock>
            <StyledHr />
            <ProductSecondInfoBlock>
               <LeftSide>
                  <ProductColorBlock>
                     <ProductColor>Цвет товара:</ProductColor>
                     <span>Сиреневый</span>
                  </ProductColorBlock>
                  <ProductCharactersBlock>
                     <ProductColor>Коротко о товаре:</ProductColor>
                  </ProductCharactersBlock>
               </LeftSide>
               <RightSide>
                  <ProductPrice>
                     <DiscountInfo>
                        <span>-10%</span>
                     </DiscountInfo>
                     <ProductDiscountPrice>54 190c</ProductDiscountPrice>
                     <ProductPrevPrice>57 190 с</ProductPrevPrice>
                  </ProductPrice>
                  <StyledHr />
                  <ProductActions>
                     <DeleteAction>
                        <IconButton>
                           <DeleteIcon />
                        </IconButton>
                     </DeleteAction>
                     <EditAction>
                        <Button variant="contained" width="194px">
                           Редактировать
                        </Button>
                     </EditAction>
                  </ProductActions>
               </RightSide>
            </ProductSecondInfoBlock>
         </RightContent>
      </Container>
   )
}

export default ProductContent

const Container = styled.div`
   display: flex;
   justify-content: flex-start;
`

const LeftContent = styled.div`
   max-width: 520px;
   margin-right: auto;
`

const RightContent = styled.div`
   max-width: 800px;
   display: flex;
   justify-content: flex-start;
   flex-direction: column;
`

const ProductNameHeader = styled.h1`
   font-family: 'Ubuntu';
   font-weight: 500;
   font-size: 28px;
   line-height: 110%;
   color: #1a1a25;
`
const ProductInfoBlock = styled.div`
   margin-top: 45px;
   display: flex;
   margin-bottom: 15px;
   flex-direction: row;
   gap: 65px;
`

const StockInfo = styled.p`
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   color: #2fc509;
`
const ArcticleInfo = styled.p`
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   color: #292929;
`
const StyledHr = styled.hr`
   border: 1px solid rgba(133, 143, 164, 0.2);
   width: 100%;
`
const RatingInfo = styled.div`
   display: flex;
   align-items: center;
   .MuiRating-root {
      font-size: 16px;
   }
`

const DiscountInfo = styled.div`
   background: #f53b49;
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

const RatingCount = styled.span`
   font-style: normal;
   font-weight: 500;
   line-height: 19px;
   font-size: 16px;
   color: #909cb5;
   margin-left: 5px;
`
const ProductColorBlock = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 15px;
`
const ProductColor = styled.p`
   font-weight: 700;
   font-size: 16px;
   line-height: 150%;
   color: #292929;
   margin-bottom: 12px;
`

const ProductSecondInfoBlock = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   margin-top: 30px;
`

const LeftSide = styled.div`
   width: 390px;
   margin-right: 45px;
`

const RightSide = styled.div`
   width: 270px;
`

const ProductCharactersBlock = styled.div``

const ProductPrice = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 18px;
`
const ProductDiscountPrice = styled.p`
   font-style: normal;
   font-weight: 700;
   font-size: 28px;
   line-height: 36px;
   color: #1a1a25;
`

const ProductPrevPrice = styled.p`
   font-style: normal;
   font-weight: 700;
   font-size: 18px;
   line-height: 135.94%;
   text-decoration-line: line-through;
   color: #858fa4;
`

const ProductActions = styled.div`
   display: flex;
   align-items: center;
   justify-content: row;
   margin-top: 20px;
   gap: 12px;
`
const DeleteAction = styled.div`
   width: 64px;
   height: 40px;
   border: 1px solid;
   text-align: center;
   border: 1px solid #91969e;
   border-radius: 4px;
   cursor: pointer;
`

const EditAction = styled.div``
