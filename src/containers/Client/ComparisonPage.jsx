import React from 'react'

import styled from 'styled-components'

import { ReactComponent as Busket } from '../../assets/icons/busket.svg'
import { ReactComponent as DeleteCompareList } from '../../assets/icons/DeleteCompareList.svg'
import { ReactComponent as Delete } from '../../assets/icons/удалить.svg'
import Samsung from '../../assets/images/Samsung.png'
import Bredcrumbs from '../../components/UI/Bredcrumbs'
import Button from '../../components/UI/Button'
import Checkbox from '../../components/UI/Checkbox'
import CustomizedTabs from '../../components/UI/Tabs'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

const ComparisonPage = () => {
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
         <Header />
         <Container>
            <Bredcrumbs pathsArray={pathsArray} />
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
                                    <ComparisonToolsRightUl>
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
         <Footer />
      </>
   )
}

export default ComparisonPage

const ComparisonPageContainer = styled.div`
   width: 100%;
   height: 930px;
   overflow: hidden;
   clear: both;
   background: #fff;
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
   overflow-x: auto;
   width: 100%;
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
const ComparisonToolsTdRight = styled.td`
   width: 100%;
   padding-left: 8px;
   font-size: 14px;
   vertical-align: top;
`
const ComparisonToolsRightUl = styled.ul`
   width: 1232px;
   list-style: none;
   overflow: hidden;
   clear: both;
   margin: 0;
   padding: 0;
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
   display: block;
   float: left;
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
const Container = styled.div`
   margin-left: 195px;
   margin-top: 60px;
   margin-bottom: 20px;
`

const ComparisonPageTitle = styled.h1`
   margin-top: 30px;
   font-family: 'Ubuntu';
   font-style: normal;
   font-weight: 500;
   font-size: 30px;
   color: #292929;
`

const ComparisonPageTabs = styled.div`
   margin-left: 195px;
`

const ComparisonPageCheckbox = styled.div`
   /* margin-left: 195px; */
   display: flex;
   flex-direction: row;
   align-items: center;
`

const ComparisonPageTools = styled.div`
   /* margin-left: 195px; */
`

const ComparisonPageCard = styled.div`
   /* margin-top: 34px; */
   /* margin: auto; */
   /* margin-bottom: 52px; */
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
