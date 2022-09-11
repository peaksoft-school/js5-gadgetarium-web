import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

// eslint-disable-next-line import/order
// import PersonPage from './containers/person/PersonPage'
import AppRoutes from './routes/AppRoutes'

function App() {
   return (
      <div>
         <ToastContainer position="top-right" />
         <AppRoutes />
      </div>
   )
}
export default App
