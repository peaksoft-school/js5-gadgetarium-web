import { ToastContainer } from 'react-toastify'

// import PersonPage from './containers/person/PersonPage'
import AppRoutes from './routes/AppRoutes'

function App() {
   return (
      <div>
         <ToastContainer />
         {/* <PersonPage /> */}
         <AppRoutes />
      </div>
   )
}
export default App
