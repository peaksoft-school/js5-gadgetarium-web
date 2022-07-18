import { InputLabel, styled } from '@mui/material'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { ReactComponent as Triangle } from '../../assets/icons/alert-triangle.svg'
import { ReactComponent as Check } from '../../assets/icons/check.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg'
import { ReactComponent as Delivery } from '../../assets/icons/delivery.svg'
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg'

function TableList({
   editButton,
   deleteButton,
   columns,
   data,
   handleSelectChange,
   status,
}) {
   return (
      <TableContainer>
         <MuiTable>
            <TableHead>
               <TableRow>
                  <DivHead>
                     {columns.map((header) => (
                        <HeadCell className="header" key={header}>
                           {header}
                        </HeadCell>
                     ))}
                  </DivHead>
               </TableRow>
            </TableHead>
            <TableBody>
               {data.map((item) => (
                  <Row>
                     <Div>
                        {item.map((value) => {
                           return (
                              <BodyCell>
                                 <p>{value}</p>
                              </BodyCell>
                           )
                        })}
                        {status && (
                           <BodyCell>
                              <SelectBox>
                                 <FormControl>
                                    <InputLabel />
                                    <Select onChange={handleSelectChange}>
                                       <SelectMenuItem value="В обработке">
                                          <Triangle />В обработке
                                       </SelectMenuItem>
                                       <SelectMenuItem value="Курьер в пути">
                                          <Delivery />
                                          Курьер в пути
                                       </SelectMenuItem>
                                       <SelectMenuItem value="Доставлены">
                                          <Check />
                                          Доставлен
                                       </SelectMenuItem>
                                       <SelectMenuItem value="Отменены">
                                          <Triangle />
                                          Отменен
                                       </SelectMenuItem>
                                    </Select>
                                 </FormControl>
                              </SelectBox>
                           </BodyCell>
                        )}
                        <BodyCell>
                           {editButton && <EditButton />}
                           {deleteButton && <DeleteIcon />}
                        </BodyCell>
                     </Div>
                  </Row>
               ))}
            </TableBody>
         </MuiTable>
      </TableContainer>
   )
}

export default TableList

const MuiTable = styled(Table)`
   width: 1317px;
`
const HeadCell = styled(TableCell)`
   border: none;
   width: width;
   height: 74px;
   text-align: right;
`

const BodyCell = styled(TableCell)`
   border-collapse: collapse;
   border: none;
   width: width;
   height: 74px;
   text-align: left;
   & .blue {
      color: blue;
   }
`
const SelectMenuItem = styled(MenuItem)`
   & :first-child {
      margin-right: 5px;
   }
`

const SelectBox = styled(Box)`
   width: 150px;
`

const Div = styled('div')`
   border: 1px solid #d5d8de;
   border-radius: 6px;
   margin-top: 8px;
   cursor: pointer;
   &:hover {
      background-color: rgba(213, 216, 222, 0.5);
   }
`
const DivHead = styled('div')`
   height: 40px;
   background: rgba(56, 66, 85, 0.9);
   & .header {
      color: white;
   }
`
const EditButton = styled(EditIcon)`
   margin-right: 20px;
`
const Row = styled(TableRow)`
   font-size: 16px;
`
