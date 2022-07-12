import { styled } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import deleteIcon from '../../assets/icons/delete.svg'
import editIcon from '../../assets/icons/edit.svg'

const headers = ['id', 'name', 'surname', 'age', 'country', 'language']
function randomDate(start, end) {
   return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
   )
}
const timestamp = randomDate(new Date(2012, 0, 1), new Date())
const tempDate = randomDate(new Date(2012, 0, 1), new Date())
   .getFullYear()
   .toString()
// const tempTime = tempDate.getTime().toString()
const tempTime = new Date(timestamp).toLocaleTimeString()
const data = [
   {
      id: '1',
      name: 'ewqqew',
      date: tempDate,
      time: tempTime,
      surname: 'qwee',
      age: 'qeqweqweqw',
      country: 'qeqweqwe',
      language: 'weqeqweqw',
   },
   {
      id: '1',
      name: 'ewqqew',
      date: tempDate,
      time: tempTime,
      surname: 'qwee',
      age: 'qeqweqweqw',
      country: 'qeqweqwe',
      language: 'weqeqweqw',
   },
   {
      id: '1',
      name: 'ewqqew',
      date: tempDate,
      time: tempTime,
      surname: 'qwee',
      age: 'qeqweqweqw',
      country: 'qeqweqwe',
      language: 'weqeqweqw',
   },
   {
      id: '1',
      name: 'ewqqew',
      date: tempDate,
      time: tempTime,
      surname: 'qwee',
      age: 'qeqweqweqw',
      country: 'qeqweqwe',
      language: 'weqeqweqw',
   },
   {
      id: '1',
      name: 'ewqqew',
      date: tempDate,
      time: tempTime,
      surname: 'qwee',
      age: 'qeqweqweqw',
      country: 'qeqweqwe',
      language: 'weqeqweqw',
   },
   {
      id: '1',
      name: 'ewqqew',
      date: tempDate,
      time: tempTime,
      surname: 'qwee',
      age: 'qeqweqweqw',
      country: 'qeqweqwe',
      language: 'weqeqweqw',
   },
]

function TableList({ edit }) {
   // console.log(data)
   return (
      <TableContainer>
         <Tables>
            <TableHead>
               <TableRow>
                  <DivHead>
                     {headers.map((header) => (
                        <Cell className="header" key={header}>
                           {header}
                        </Cell>
                     ))}
                  </DivHead>
               </TableRow>
            </TableHead>
            <TableBody>
               {data.map((item) => (
                  <Div>
                     <TableRow>
                        <Cell>{item.id}</Cell>
                        {Object.entries(item).map(([key, value]) => (
                           <Cell>
                              <p key={key}>{value}</p>
                           </Cell>
                        ))}
                        <Cell>
                           <div>
                              {edit && (
                                 <img
                                    className="edit"
                                    src={editIcon}
                                    alt="edit"
                                 />
                              )}
                              <img
                                 className="delete"
                                 src={deleteIcon}
                                 alt="delete"
                              />
                           </div>
                        </Cell>
                     </TableRow>
                  </Div>
               ))}
            </TableBody>
         </Tables>
      </TableContainer>
   )
}

export default TableList

const Tables = styled(Table)`
   width: 1317px;
`

const Cell = styled(TableCell)`
   border-collapse: collapse;
   border: none;
   height: 74px;
   & .edit {
      margin-right: 16px;
   }
`

const Div = styled('div')`
   border: 1px solid #d5d8de;
   border-radius: 6px;
   margin-top: 8px;
   width: 100%;
   display: flex;
   justify-content: space-between;
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
