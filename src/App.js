// import AddProducts from './containers/admin/products/AddProducts'
// import HeaderForAdmin from './layout/HeaderForAdmin'

// import { useState } from 'react'

// import { NavLink, Outlet, Link, useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AppRoutes from './routes/AppRoutes'

function App() {
   return (
      <>
         <ToastContainer />
         <AppRoutes />
         {/* <HeaderForAdmin />
         <AddProducts /> */}
      </>
   )
}

export default App

// function App() {
//    const navigate = useNavigate()
//    const [users, setUsers] = useState([
//       { id: '1', fullName: 'Robin Wieruch' },
//       { id: '2', fullName: 'Sarah Finnley' },
//    ])

//    const handleRemoveUser = (userId) => {
//       setUsers((state) => state.filter((user) => user.id !== userId))
//       navigate('/users')
//    }
//    return (
//       <>
//          <AppRoutes />
//          {/* <HeaderForAdmin />
//          <AddProducts /> */}
//          <Routes>
//             <Route element={<Layout />}>
//                <Route index element={<Home />} />
//                <Route path="home" element={<Home />} />
//                <Route path="users" element={<Users users={users} />}>
//                   <Route
//                      path=":userId"
//                      element={<User onRemoveUser={handleRemoveUser} />}
//                   />
//                </Route>
//                <Route path="*" element={<NoMatch />} />
//             </Route>
//          </Routes>
//       </>
//    )
// }

// export default App

// const NoMatch = () => {
//    return <p>There is nothing here: 404!</p>
// }

// const Navigation = () => {
//    return (
//       <nav
//          style={{
//             borderBottom: 'solid 1px',
//             paddingBottom: '1rem',
//          }}
//       >
//          <Link to="/home">Home</Link>
//          <Link to="/users">Users</Link>
//       </nav>
//    )
// }

// const Home = () => {
//    return (
//       <main style={{ padding: '1rem 0' }}>
//          <h2>Home</h2>
//       </main>
//    )
// }

// const Users = ({ users }) => {
//    return (
//       <>
//          <h2>Users</h2>

//          <ul>
//             {users.map((user) => (
//                <li key={user.id}>
//                   <Link to={user.id}>{user.fullName}</Link>
//                </li>
//             ))}
//          </ul>
//          <Outlet />
//       </>
//    )
// }

// const User = ({ onRemoveUser }) => {
//    const { userId } = useParams()

//    return (
//       <>
//          <h2>User: {userId}</h2>
//          <button type="button" onClick={() => onRemoveUser(userId)}>
//             Remove
//          </button>

//          <Link to="/users">Back to Users</Link>
//       </>
//    )
// }

// const Layout = () => {
//    const style = ({ isActive }) => ({
//       fontWeight: isActive ? 'bold' : 'normal',
//    })
//    return (
//       <>
//          <h1>React Router</h1>

//          <nav
//             style={{
//                borderBottom: 'solid 1px',
//                paddingBottom: '1rem',
//             }}
//          >
//             <NavLink to="/home" style={style}>
//                Home
//             </NavLink>
//             <NavLink to="/users" style={style}>
//                Users
//             </NavLink>
//          </nav>
//          <main style={{ padding: '1rem 0' }}>
//             <Outlet />
//          </main>
//       </>
//    )
// }
