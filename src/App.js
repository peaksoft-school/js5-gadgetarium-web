import React from 'react'

import TableList from './components/UI/TableList'

const data = [
   {
      id: '1',
      name: 'ewqqew',
      surname: 'qwee1312',
      age: '12',
      country: 'qeqweqwe',
      language: 'weqeqweqw',
   },
   {
      id: '2',
      name: 'ewqqew',
      surname: 'qweeadasdas',
      age: '23',
      country: 'qeqweqwe',
      language: 'weqeqweqw',
   },
   {
      id: '1',
      name: 'ewqqew',
      surname: 'qweefwerew',
      age: '33',
      country: 'qeqweqwe',
      language: 'weqeqweqw',
   },
   {
      id: '1',
      name: 'ewqqew',
      surname: 'qweewewrwe',
      age: '11',
      country: 'qeqweqwe',
      language: 'weqeqweqw',
   },
   {
      id: '1',
      name: 'ewqqew',
      surname: 'qweeasdadas',
      age: '22',
      country: 'qeqweqwe',
      language: 'weqeqweqw',
   },
   {
      id: '1',
      name: 'ewqqew',
      surname: 'qweeadsda',
      age: '32',
      country: 'qeqweqwe',
      language: 'weqeqweqw',
   },
]

const columns = [
   { title: 'id', witdh: '400px' },
   { title: 'name', width: '100px' },
   { title: 'surname', width: '150px' },
   { title: 'age', width: '100px' },
   { title: 'country', width: '100px' },
   { title: 'language', width: '100px' },
]

function App() {
   const newData = data.map((item) => {
      return [
         { title: item.id, width: '100px' },
         {
            title: item.name,
            description: 'my name is Samagan qweeeeeeeeeeeeeeeeeeee',
            width: '150px',
         },
         { title: item.surname, width: '150px', className: 'blue' },
         { title: item.age, discount: '15%', width: '100px' },
         { title: item.country, width: '100px' },
         { title: item.language, time: '12:23', width: '100px' },
      ]
   })
   return (
      <div>
         Hello
         <TableList
            editButton
            deleteButton
            status
            data={newData}
            columns={columns}
         />
      </div>
   )
}

export default App
