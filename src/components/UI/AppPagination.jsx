import React from 'react'

import { Box } from '@mui/material'
import Pagination from '@mui/material/Pagination'

const AppPagination = () => {
   return (
      <Box justifyContent="center" alignItems="center" display="flex">
         <Pagination
            count={10}
            color="secondary"
            sx={{
               margin: '20px 4px 20px 4px',
            }}
         />
      </Box>
   )
}

export default AppPagination
