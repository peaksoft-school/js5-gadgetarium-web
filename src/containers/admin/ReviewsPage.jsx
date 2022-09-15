import React from 'react'

import styled from 'styled-components'

import AllReviews from '../../components/admin/AllReviews'
import Infographic from '../../components/admin/Infographic'
import Tab from '../../components/UI/Tab'

const tabsArray = [
   {
      id: 1,
      label: 'Все отзывы',
      value: '1',
      Component: <AllReviews />,
   },
   {
      id: 2,
      label: 'Неотвеченные ',
      value: '2',
   },
   {
      id: 3,
      label: 'Отвеченные',
   },
]

const ReviewsPage = () => {
   return (
      <div>
         <Div>
            <TabStyledComponent>
               <Tab tabsArray={tabsArray} variant="pink" />
            </TabStyledComponent>
            <Infographic />
         </Div>
      </div>
   )
}

export default ReviewsPage

const Div = styled('div')`
   display: flex;
   justify-content: space-between;
`
const TabStyledComponent = styled.div`
   .css-13xfq8m-MuiTabPanel-root {
      padding: 0px;
   }
`
