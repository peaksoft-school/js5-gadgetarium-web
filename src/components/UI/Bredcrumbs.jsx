import styled from '@emotion/styled'
import { Breadcrumbs, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const BreadCrumbs = ({ pathsArray }) => {
   const crumbs = pathsArray.map((crumb, index) => {
      const isLast = index === pathsArray.length - 1
      return isLast ? (
         <LastPathStyle color="black" key={crumb.path}>
            {crumb.name}
         </LastPathStyle>
      ) : (
         <LinkStyleControl to={crumb.path} key={crumb.path}>
            {crumb.name}
         </LinkStyleControl>
      )
   })
   return (
      <StyledCrumbs aria-label="breadcrumbs" separator="»">
         {crumbs}
      </StyledCrumbs>
   )
}

export default BreadCrumbs

const StyledCrumbs = styled(Breadcrumbs)`
   display: flex;
   align-items: center;
   text-align: center;
   font-size: 14px;
   letter-spacing: 0.02em;
`
const LinkStyleControl = styled(Link)`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   text-decoration: none;
   line-height: 140%;
   color: #91969e;
`
const LastPathStyle = styled(Typography)``
