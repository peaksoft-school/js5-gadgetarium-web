// import { useState } from 'react'

import { styled } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { ReactComponent as CheckMark } from '../../../assets/icons/check-mark-in-a-circle-svgrepo-com.svg'
import Checkbox from '../../UI/Checkbox'

function TableList({
   columns,
   data,
   width,
   checkbox,
   onNavigetToInnerPage,
   getProductId,
}) {
   return (
      <TableContainer>
         <MuiTable width={width}>
            <TableHead>
               <TableRow>
                  <DivHead>
                     {checkbox && (
                        <HeadCell>
                           <div
                              style={{ marginTop: '8px', textAlign: 'center' }}
                           >
                              <CheckMark />
                           </div>
                        </HeadCell>
                     )}
                     {columns.map((col) => {
                        if (col.headerCell) {
                           return (
                              <HeadCell width={col.width} key={col.key}>
                                 {col.headerCell()}
                              </HeadCell>
                           )
                        }
                        return (
                           <HeadCell width={col.width} key={col.key}>
                              {col.header}
                           </HeadCell>
                        )
                     })}
                  </DivHead>
               </TableRow>
            </TableHead>
            <TableBody>
               {data?.map((row) => {
                  return (
                     <Row
                        key={row.productId}
                        onClick={() => onNavigetToInnerPage(row.productId)}
                     >
                        <Div>
                           {checkbox && (
                              <BodyCell>
                                 <Checkbox
                                    onChange={(event) =>
                                       getProductId(event, row.productId)
                                    }
                                    onClick={(event) => event.stopPropagation()}
                                    value={row.productId}
                                 />
                              </BodyCell>
                           )}
                           {columns.map((col) => {
                              if (col.cell) {
                                 return (
                                    <BodyCell
                                       width={col.width}
                                       key={col.key}
                                       style={col.style}
                                    >
                                       {col.cell(row)}
                                    </BodyCell>
                                 )
                              }
                              return (
                                 <BodyCell width={col.width} key={col.key}>
                                    {row[col.key]}
                                 </BodyCell>
                              )
                           })}
                        </Div>
                     </Row>
                  )
               })}
            </TableBody>
         </MuiTable>
      </TableContainer>
   )
}

export default TableList

const MuiTable = styled(Table)`
   table-layout: fixed;
   width: width;

   & .MuiTableCell-root.MuiTableCell-body {
      display: flex;
      justify-content: flex-start;
      align-items: center;
   }
`

const HeadCell = styled(TableCell)`
   border: none;
   height: 40px;
   display: flex;
   align-items: center;
   text-align: left;
   color: white;
   justify-content: flex-start;
   white-space: nowrap;
`

const BodyCell = styled(TableCell)`
   border-collapse: collapse;
   border: none;
   width: width;
   height: 74px;
   max-height: 74px;
   text-align: left;
`

const Div = styled('div')`
   border: 1px solid #d5d8de;
   border-radius: 6px;
   margin-top: 8px;
   display: flex;
   justify-content: space-between;
   &:hover {
      background-color: rgba(213, 216, 222, 0.5);
   }
`
const DivHead = styled('div')`
   height: 40px;
   display: flex;
   justify-content: space-between;
   background: rgba(56, 66, 85, 0.9);
`
const Row = styled(TableRow)`
   font-size: 16px;
   cursor: pointer;
`
