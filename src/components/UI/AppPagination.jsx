import React from 'react'

import { Box, styled } from '@mui/material'
import Pagination from '@mui/material/Pagination'

const AppPagination = ({ totalPage, onChange, page }) => {
   return (
      <Box justifyContent="center" alignItems="center" display="flex">
         <PaginationStyled
            count={totalPage}
            onChange={(e) => onChange(e.target.textContent)}
            page={Number(page)}
            color="secondary"
         />
      </Box>
   )
}

const PaginationStyled = styled(Pagination)`
   margin: 20px 4px 20px 4px;
`

export default AppPagination
