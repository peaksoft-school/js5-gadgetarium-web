import { useState } from 'react'

import { Checkbox, styled } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

function TableList({ columns, data, width, checkbox }) {
   const [checked, setChecked] = useState(0)
   const countChecked = (event) => {
      if (event.target.checked === true) {
         setChecked((prevState) => prevState + 1)
      } else {
         setChecked((prevState) => prevState - 1)
      }
   }
   return (
      <TableContainer>
         <MuiTable width={width}>
            <TableHead>
               <TableRow>
                  <DivHead>
                     {checkbox && (
                        <HeadCell>
                           <div style={{ width: '42px', textAlign: 'center' }}>
                              {checked}
                           </div>
                        </HeadCell>
                     )}
                     {columns.map((col) => {
                        if (col.headerCell) {
                           return (
                              <HeadCell width={col.width}>
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
               {data.map((row) => {
                  return (
                     <Row>
                        <Div>
                           {checkbox && (
                              <BodyCell>
                                 <Checkbox onChange={countChecked} />
                              </BodyCell>
                           )}
                           {columns.map((col) => {
                              if (col.cell) {
                                 return (
                                    <BodyCell width={col.width}>
                                       {col.cell(row)}
                                    </BodyCell>
                                 )
                              }
                              return (
                                 <BodyCell width={col.width}>
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
`

const HeadCell = styled(TableCell)`
   border: none;
   height: 40px;
   display: flex;
   align-items: center;
   text-align: right;
   color: white;
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
   &:hover {
      background-color: rgba(213, 216, 222, 0.5);
   }
`
const DivHead = styled('div')`
   height: 40px;
   display: flex;
   background: rgba(56, 66, 85, 0.9);
   & .header {
      color: white;
   }
`
const Row = styled(TableRow)`
   font-size: 16px;
`
