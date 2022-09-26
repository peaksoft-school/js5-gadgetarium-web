import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import Infographic from '../../components/admin/adminUI/Infographic'
import AllReviews from '../../components/admin/AllReviews'
import ReadReviews from '../../components/admin/ReadReviews'
import UnreadReviews from '../../components/admin/UnreadReviews'
import Tab from '../../components/UI/Tab'
import { getReviews } from '../../store/actions/adminReviewAction'

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
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getReviews())
   }, [])
   return (
      <Div>
         <TabStyledComponent>
            <Tab tabsArray={tabsArray} variant="pink" baseValue="1" />
         </TabStyledComponent>
         <Infographic />
      </Div>
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
