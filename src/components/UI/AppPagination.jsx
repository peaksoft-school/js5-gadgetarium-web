import React from 'react'

import { Box, styled } from '@mui/material'
import Pagination from '@mui/material/Pagination'

const AppPagination = ({ page, totalPage, onChange }) => {
   return (
      <Box justifyContent="center" alignItems="center" display="flex">
         <PaginationStyled
            count={10}
            page={page}
            totalPage={totalPage}
            onChange={onChange}
            color="secondary"
         />
      </Box>
   )
}

const PaginationStyled = styled(Pagination)`
   margin: 20px 4px 20px 4px;
`

export default AppPagination
