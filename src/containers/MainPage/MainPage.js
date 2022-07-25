import React from 'react'

import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MainPage = () => {
   return (
      <div>
         <h1>MainPage</h1>
         <StyledLink to="/comparison">To Comparison</StyledLink>
      </div>
   )
}

export default MainPage

const StyledLink = styled(Link)`
   text-decoration: none;
   font-size: 36px;
`
