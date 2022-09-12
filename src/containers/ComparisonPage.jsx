import React, { useRef } from 'react'

import styled from 'styled-components'

import { ReactComponent as ArrowSlider } from '../../../assets/icons/arrow2.svg'
import { ReactComponent as Busket } from '../../../assets/icons/comparison-busket.svg'
import { ReactComponent as DeleteCompareList } from '../../../assets/icons/DeleteCompareList.svg'
import { ReactComponent as Delete } from '../../../assets/icons/удалить.svg'
import Samsung from '../../../assets/images/Samsung.png'
import Bredcrumbs from '../../../components/UI/Bredcrumbs'
import Button from '../../../components/UI/Button'
import Checkbox from '../../../components/UI/Checkbox'
import CustomizedTabs from '../../../components/UI/CustomizedTabs'

const ComparisonPage = () => {
   const slideRef = useRef(null)

   const slideLeft = () => {
      slideRef.current.scrollLeft -= '100%'
   }

   const slideRight = () => {
      slideRef.current.scrollLeft += 500
   }

   const pathsArray = [
      {
         path: '/',
         name: 'Главная',
      },
      {
         path: '/comparison',
         name: 'Сравнение',
      },
   ]

   return (
      <>
         <Container>
            <Bredcrumbs paths={pathsArray} />
            <ComparisonPageTitle>Сравнение товаров</ComparisonPageTitle>
         </Container>
         <ComparisonPageContainer>
            <ComparisonPageTabs>
               <CustomizedTabs>
                  <ComparisonPageCheckbox>
                     <Checkbox label="Показывать только различия" />
                     <ComparisonListClear>
                        <DeleteCompareList />
                        <p>Oчистить список</p>
                     </ComparisonListClear>
                  </ComparisonPageCheckbox>
                  <ComparisonPageTools>
                     <ComparisonToolsTable>
                        <tbody>
                           <tr>
                              <ComparisonToolsTdLeft>
                                 <div>
                                    <ComparisonToolSLeftUl>
                                       <li>Бренд</li>
                                       <li>Бренд</li>
                                       <li>Бренд</li>
                                       <li>Бренд</li>
                                       <li>Бренд</li>
                                    </ComparisonToolSLeftUl>
                                 </div>
                              </ComparisonToolsTdLeft>
                              <ComparisonToolsTdRight>
                                 <ComparisonToolsRightDiv>
                                    <ComparisonToolsRightUl ref={slideRef}>
                                       <LeftArrowSlider onClick={slideLeft} />
                                       <ComparisonToolsRightLi>
                                          <ComparisonPageCard>
                                             <ComparisonCardClear>
                                                <Delete />
                                             </ComparisonCardClear>
                                             <ComparisonCardImage>
                                                <img
                                                   src={Samsung}
                                                   alt="samsung"
                                                />
                                             </ComparisonCardImage>
                                             <ComparisonCardTitle>
                                                <ComparisonTitleHeader>
                                                   Samsung Galaxy S21 128gb
                                                   синий 9(MLP3RU)
                                                </ComparisonTitleHeader>
                                                <ComparisonTitleParagraph>
                                                   98 910 c
                                                </ComparisonTitleParagraph>
                                             </ComparisonCardTitle>
                                             <ComparisonCardButton>
                                                <Button
                                                   variant="contained"
                                                   startIcon={<Busket />}
                                                   width="180px"
                                                   height="41px"
                                                >
                                                   В корзину
                                                </Button>
                                             </ComparisonCardButton>
                                          </ComparisonPageCard>
                                          <ul>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                          </ul>
                                       </ComparisonToolsRightLi>
                                       <ComparisonToolsRightLi>
                                          <ComparisonPageCard>
                                             <ComparisonCardClear>
                                                <Delete />
                                             </ComparisonCardClear>
                                             <ComparisonCardImage>
                                                <img
                                                   src={Samsung}
                                                   alt="samsung"
                                                />
                                             </ComparisonCardImage>
                                             <ComparisonCardTitle>
                                                <ComparisonTitleHeader>
                                                   Samsung Galaxy S21 128gb
                                                   синий 9(MLP3RU)
                                                </ComparisonTitleHeader>
                                                <ComparisonTitleParagraph>
                                                   98 910 c
                                                </ComparisonTitleParagraph>
                                             </ComparisonCardTitle>
                                             <ComparisonCardButton>
                                                <Button
                                                   variant="contained"
                                                   startIcon={<Busket />}
                                                   width="180px"
                                                   height="41px"
                                                >
                                                   В корзину
                                                </Button>
                                             </ComparisonCardButton>
                                          </ComparisonPageCard>
                                          <ul>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                          </ul>
                                       </ComparisonToolsRightLi>
                                       <ComparisonToolsRightLi>
                                          <ComparisonPageCard>
                                             <ComparisonCardClear>
                                                <Delete />
                                             </ComparisonCardClear>
                                             <ComparisonCardImage>
                                                <img
                                                   src={Samsung}
                                                   alt="samsung"
                                                />
                                             </ComparisonCardImage>
                                             <ComparisonCardTitle>
                                                <ComparisonTitleHeader>
                                                   Samsung Galaxy S21 128gb
                                                   синий 9(MLP3RU)
                                                </ComparisonTitleHeader>
                                                <ComparisonTitleParagraph>
                                                   98 910 c
                                                </ComparisonTitleParagraph>
                                             </ComparisonCardTitle>
                                             <ComparisonCardButton>
                                                <Button
                                                   variant="contained"
                                                   startIcon={<Busket />}
                                                   width="180px"
                                                   height="41px"
                                                >
                                                   В корзину
                                                </Button>
                                             </ComparisonCardButton>
                                          </ComparisonPageCard>
                                          <ul>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                          </ul>
                                       </ComparisonToolsRightLi>
                                       <ComparisonToolsRightLi>
                                          <ComparisonPageCard>
                                             <ComparisonCardClear>
                                                <Delete />
                                             </ComparisonCardClear>
                                             <ComparisonCardImage>
                                                <img
                                                   src={Samsung}
                                                   alt="samsung"
                                                />
                                             </ComparisonCardImage>
                                             <ComparisonCardTitle>
                                                <ComparisonTitleHeader>
                                                   Samsung Galaxy S21 128gb
                                                   синий 9(MLP3RU)
                                                </ComparisonTitleHeader>
                                                <ComparisonTitleParagraph>
                                                   98 910 c
                                                </ComparisonTitleParagraph>
                                             </ComparisonCardTitle>
                                             <ComparisonCardButton>
                                                <Button
                                                   variant="contained"
                                                   startIcon={<Busket />}
                                                   width="180px"
                                                   height="41px"
                                                >
                                                   В корзину
                                                </Button>
                                             </ComparisonCardButton>
                                          </ComparisonPageCard>
                                          <ul>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                          </ul>
                                       </ComparisonToolsRightLi>
                                       <ComparisonToolsRightLi>
                                          <ComparisonPageCard>
                                             <ComparisonCardClear>
                                                <Delete />
                                             </ComparisonCardClear>
                                             <ComparisonCardImage>
                                                <img
                                                   src={Samsung}
                                                   alt="samsung"
                                                />
                                             </ComparisonCardImage>
                                             <ComparisonCardTitle>
                                                <ComparisonTitleHeader>
                                                   Samsung Galaxy S21 128gb
                                                   синий 9(MLP3RU)
                                                </ComparisonTitleHeader>
                                                <ComparisonTitleParagraph>
                                                   98 910 c
                                                </ComparisonTitleParagraph>
                                             </ComparisonCardTitle>
                                             <ComparisonCardButton>
                                                <Button
                                                   variant="contained"
                                                   startIcon={<Busket />}
                                                   width="180px"
                                                   height="41px"
                                                >
                                                   В корзину
                                                </Button>
                                             </ComparisonCardButton>
                                          </ComparisonPageCard>
                                          <ul>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                          </ul>
                                       </ComparisonToolsRightLi>
                                       <ComparisonToolsRightLi>
                                          <ComparisonPageCard>
                                             <ComparisonCardClear>
                                                <Delete />
                                             </ComparisonCardClear>
                                             <ComparisonCardImage>
                                                <img
                                                   src={Samsung}
                                                   alt="samsung"
                                                />
                                             </ComparisonCardImage>
                                             <ComparisonCardTitle>
                                                <ComparisonTitleHeader>
                                                   Samsung Galaxy S21 128gb
                                                   синий 9(MLP3RU)
                                                </ComparisonTitleHeader>
                                                <ComparisonTitleParagraph>
                                                   98 910 c
                                                </ComparisonTitleParagraph>
                                             </ComparisonCardTitle>
                                             <ComparisonCardButton>
                                                <Button
                                                   variant="contained"
                                                   startIcon={<Busket />}
                                                   width="180px"
                                                   height="41px"
                                                >
                                                   В корзину
                                                </Button>
                                             </ComparisonCardButton>
                                          </ComparisonPageCard>
                                          <ul>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                          </ul>
                                       </ComparisonToolsRightLi>
                                       <ComparisonToolsRightLi>
                                          <ComparisonPageCard>
                                             <ComparisonCardClear>
                                                <Delete />
                                             </ComparisonCardClear>
                                             <ComparisonCardImage>
                                                <img
                                                   src={Samsung}
                                                   alt="samsung"
                                                />
                                             </ComparisonCardImage>
                                             <ComparisonCardTitle>
                                                <ComparisonTitleHeader>
                                                   Samsung Galaxy S21 128gb
                                                   синий 9(MLP3RU)
                                                </ComparisonTitleHeader>
                                                <ComparisonTitleParagraph>
                                                   98 910 c
                                                </ComparisonTitleParagraph>
                                             </ComparisonCardTitle>
                                             <ComparisonCardButton>
                                                <Button
                                                   variant="contained"
                                                   startIcon={<Busket />}
                                                   width="180px"
                                                   height="41px"
                                                >
                                                   В корзину
                                                </Button>
                                             </ComparisonCardButton>
                                          </ComparisonPageCard>
                                          <ul>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                             <li>Apple</li>
                                          </ul>
                                       </ComparisonToolsRightLi>
                                       <RightArrowSlider onClick={slideRight} />
                                    </ComparisonToolsRightUl>
                                 </ComparisonToolsRightDiv>
                              </ComparisonToolsTdRight>
                           </tr>
                        </tbody>
                     </ComparisonToolsTable>
                  </ComparisonPageTools>
               </CustomizedTabs>
            </ComparisonPageTabs>
         </ComparisonPageContainer>
      </>
   )
}

export default ComparisonPage

const ComparisonPageContainer = styled.div`
   width: 1920px;
   background: #fff;
   margin-top: 34px;
   margin-bottom: 120px;
`

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
   &:hover {
      box-shadow: 0px 2px 6px rgb(0 0 0 / 7%), 0px 0px 25px rgb(0 0 0 / 10%);
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
   &:hover {
      box-shadow: 0px 2px 6px rgb(0 0 0 / 7%), 0px 0px 25px rgb(0 0 0 / 10%);
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
   align-items: center;
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
const Container = styled.div``

const ComparisonPageTitle = styled.h1`
   margin-top: 30px;
   font-family: 'Ubuntu';
   font-style: normal;
   font-weight: 500;
   font-size: 30px;
   color: #292929;
`

const ComparisonPageTabs = styled.div`
   padding-bottom: 20px;
`

const ComparisonPageCheckbox = styled.div`
   /* margin-left: 195px; */
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
   max-width: 220px;
   max-height: 370px;
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

const ComparisonCardClear = styled.div`
   display: flex;
   justify-content: flex-end;
`

const ComparisonCardImage = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 3px;
   margin-bottom: 18px;
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
