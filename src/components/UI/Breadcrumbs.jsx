import styled from '@emotion/styled'
import { Breadcrumbs, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const BreadCrumbs = ({ paths }) => {
   const crumbs = paths.map((crumb, index) => {
      const isLast = index === paths.length - 1
      return isLast ? (
         <Typography color="black" key={crumb.path}>
            {crumb.name}
         </Typography>
      ) : (
         <LinkStyleControl to={crumb.path} key={crumb.path}>
            {crumb.name}
         </LinkStyleControl>
      )
   })
   return (
      <StyledBreadCrumbs aria-label="breadcrumbs" separator="»">
         {crumbs}
      </StyledBreadCrumbs>
   )
}

export default BreadCrumbs

const StyledBreadCrumbs = styled(Breadcrumbs)`
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
