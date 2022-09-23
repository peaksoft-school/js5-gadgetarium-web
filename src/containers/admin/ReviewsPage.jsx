import React from 'react'

import styled from 'styled-components'

import AllReviews from '../../components/admin/AllReviews'
import Infographic from '../../components/admin/Infographic'
import ReadReviews from '../../components/admin/ReadReviews'
import UnreadReviews from '../../components/admin/UnreadReviews'
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
      Component: <UnreadReviews />,
   },
   {
      id: 3,
      label: 'Отвеченные',
      value: '3',
      Component: <ReadReviews />,
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
