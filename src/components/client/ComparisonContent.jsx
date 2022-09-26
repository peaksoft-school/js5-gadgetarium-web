import React, { Fragment, useRef } from 'react'

import styled from 'styled-components'

import { ReactComponent as ArrowSlider } from '../../assets/icons/arrow2.svg'
import { ReactComponent as Busket } from '../../assets/icons/comparison-busket.svg'
import { ReactComponent as DeleteCompareList } from '../../assets/icons/DeleteCompareList.svg'
import { ReactComponent as Delete } from '../../assets/icons/удалить.svg'
import EmptyIcon from '../../assets/images/sammy-finance 1.png'
import * as CHARACTERS from '../../data/characters'
import Button from '../UI/Button'

const renderSwitch = (param) => {
   switch (param) {
      case 'SMARTPHONE':
         return CHARACTERS.phoneCharacters
      case 'LAPTOP':
         return CHARACTERS.laptopCharacters
      case 'TABLET':
         return CHARACTERS.tabletCharacters
      case 'SMARTWATCHES':
         return CHARACTERS.smartWathchesCharacters
      default:
         return null
   }
}

const ComparisonContent = ({
   type,
   data,
   handleDelete,
   addProductsToCart,
   handleAllDelete,
}) => {
   const slideRef = useRef(null)

   const slideLeft = () => {
      slideRef.current.scrollLeft -= '100%'
   }

   const slideRight = () => {
      slideRef.current.scrollLeft += 500
   }
   return (
      <>
         {data?.length > 0 && (
            <ComparisonPageCheckbox>
               <ComparisonListClear>
                  <DeleteCompareList />
                  <p onClick={handleAllDelete}>Oчистить список</p>
               </ComparisonListClear>
            </ComparisonPageCheckbox>
         )}
         {data?.length > 0 ? (
            <ComparisonPageTools>
               <ComparisonToolsTable>
                  <tbody>
                     <tr>
                        <ComparisonToolsTdLeft>
                           <div>
                              <ComparisonToolSLeftUl>
                                 {renderSwitch(type).map((data) => (
                                    <li key={data.id}>{data.placeholder}</li>
                                 ))}
                              </ComparisonToolSLeftUl>
                           </div>
                        </ComparisonToolsTdLeft>
                        <ComparisonToolsTdRight>
                           <ComparisonToolsRightDiv>
                              <ComparisonToolsRightUl ref={slideRef}>
                                 <LeftArrowSlider onClick={slideLeft} />
                                 {data?.map((el) => (
                                    <ComparisonToolsRightLi key={el.id}>
                                       <ComparisonPageCard>
                                          <ComparisonCardClear>
                                             <p
                                                onClick={(e) =>
                                                   handleDelete(e, el.id)
                                                }
                                             >
                                                <Delete />
                                             </p>
                                          </ComparisonCardClear>
                                          <ComparisonCardImage>
                                             <img
                                                src={el.image}
                                                alt={el.name}
                                             />
                                          </ComparisonCardImage>
                                          <ComparisonCardTitle>
                                             <ComparisonTitleHeader>
                                                {el.name}
                                             </ComparisonTitleHeader>
                                             <ComparisonTitleParagraph>
                                                {el.price}
                                             </ComparisonTitleParagraph>
                                          </ComparisonCardTitle>
                                          <ComparisonCardButton>
                                             <Button
                                                variant="contained"
                                                startIcon={<Busket />}
                                                width="180px"
                                                height="41px"
                                                onClick={() =>
                                                   addProductsToCart(el.id)
                                                }
                                             >
                                                В корзину
                                             </Button>
                                          </ComparisonCardButton>
                                       </ComparisonPageCard>
                                       <ul>
                                          {el.characterResponses.map((char) => (
                                             <li key={char.id}>{char.value}</li>
                                          ))}
                                       </ul>
                                    </ComparisonToolsRightLi>
                                 ))}
                                 <RightArrowSlider onClick={slideRight} />
                              </ComparisonToolsRightUl>
                           </ComparisonToolsRightDiv>
                        </ComparisonToolsTdRight>
                     </tr>
                  </tbody>
               </ComparisonToolsTable>
            </ComparisonPageTools>
         ) : (
            <StyledBlock>
               <StyledComponent>
                  <StyledEmptyIcon src={EmptyIcon} />
                  <StyledF2>Сравнивать пока нечего</StyledF2>
                  <StyledText>
                     Добавляйте сюда товары, чтобы сравнить их характеристики.
                     Так выбрать станет проще!
                  </StyledText>
               </StyledComponent>
            </StyledBlock>
         )}
      </>
   )
}

export default ComparisonContent

const ComparisonToolsTable = styled.table`
   width: 100%;
   table-layout: fixed;
   border-collapse: collapse;
`

const ComparisonToolsTdLeft = styled.td`
   text-align: center;
   width: 300px;
   vertical-align: top;
   font-size: 14px;
`

const ComparisonToolsRightDiv = styled.div`
   position: relative;
   display: flex;
   align-items: center;
`

const ComparisonToolSLeftUl = styled.ul`
   margin-top: 422px;
   list-style: none;
   & li {
      border-bottom: 1px solid #eee;
      text-align: left;
      height: 35px;
      line-height: 35px;
      white-space: nowrap;
      font-family: 'Inter';
      font-weight: 700;
      font-size: 16px;
      color: #292929;
   }
`

const LeftArrowSlider = styled(ArrowSlider)`
   top: 30%;
   width: 50px;
   height: 50px;
   background: #fff;
   position: absolute;
   left: 0;
   transform: rotate(180deg);
   padding: 15px;
   border-radius: 25px;
   cursor: pointer;
   border: 1px solid #cb11ab;
   transition: 0.4s;
   opacity: 0.5;
   &:hover {
      box-shadow: 0px 2px 6px rgb(0 0 0 / 7%), 0px 0px 25px rgb(0 0 0 / 10%);
      opacity: 1;
   }
`
const RightArrowSlider = styled(ArrowSlider)`
   top: 30%;
   width: 50px;
   height: 50px;
   position: absolute;
   right: 0;
   background: #fff;
   padding: 15px;
   border-radius: 25px;
   cursor: pointer;
   border: 1px solid #cb11ab;
   transition: 0.4s;
   opacity: 0.5;
   &:hover {
      box-shadow: 0px 2px 6px rgb(0 0 0 / 7%), 0px 0px 25px rgb(0 0 0 / 10%);
      opacity: 1;
   }
`
const ComparisonPageCheckbox = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
`

const ComparisonPageTools = styled.div`
   margin-top: 34px;
`

const ComparisonPageCard = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 220px;
   height: 370px;
   background: #fff;
   border: 1px solid #e8e8e8;
   border-radius: 4px;
   padding: 12px;
   transition: 0.5s ease;
   cursor: pointer;
   &:hover {
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
      transform: scale(10px);
   }
`
const ComparisonToolsTdRight = styled.td`
   width: 100%;
   padding-left: 8px;
   font-size: 14px;
   vertical-align: top;
`
const ComparisonToolsRightUl = styled.ul`
   width: 100%;
   overflow-x: scroll;
   list-style: none;
   display: flex;
   scroll-behavior: smooth;
   &::-webkit-scrollbar {
      display: none;
   }
`
const ComparisonListClear = styled.div`
   display: flex;
   align-items: center;
   cursor: pointer;
   & p {
      margin-left: 6px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      color: #384255;
   }
`
const ComparisonToolsRightLi = styled.li`
   width: 220px;
   display: inline-block;
   margin-left: 30px;
   margin-bottom: 12px;
   & ul {
      margin-top: 54px;
      overflow: hidden;
      clear: both;
      list-style: none;
      & li {
         border-bottom: 1px solid #eee;
         height: 35px;
         line-height: 35px;
         overflow: hidden;
         font-family: 'Inter';
         font-style: normal;
         font-weight: 400;
         font-size: 16px;
         color: #292929;
      }
   }
`

const ComparisonCardClear = styled.div`
   display: flex;
   justify-content: flex-end;
`

const ComparisonCardImage = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 3px;
   margin-bottom: 18px;
   & img {
      width: 155px;
      height: 170px;
      object-fit: contain;
   }
`

const ComparisonCardTitle = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 12px;
   margin-left: 10px;
`

const ComparisonTitleHeader = styled.h1`
   font-weight: 500;
   font-size: 14px;
   line-height: 140%;
   color: #292929;
`

const ComparisonTitleParagraph = styled.p`
   font-weight: 700;
   font-size: 18px;
   line-height: 140%;
   color: #292929;
   margin-top: 8px;
`

const ComparisonCardButton = styled.div`
   display: flex;
   justify-content: center;
   margin-bottom: 8px;
`
const StyledEmptyIcon = styled('img')`
   width: 300px;
`
const StyledF2 = styled.h2`
   font-style: normal;
   font-weight: 500;
   font-size: 24px;
   line-height: 110%;
   color: #292929;
`
const StyledText = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 130%;
   display: flex;
   align-items: flex-end;
   text-align: center;
   color: #292929;
`

const StyledBlock = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   padding: 120px 0px 120px 0px;
`
const StyledComponent = styled.div`
   width: 466px;
   height: 500px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
`
