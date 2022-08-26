import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AppRoutes from './routes/AppRoutes'

function App() {
   return (
      <div>
         <ToastContainer />
         <AppRoutes />
      </div>
   )
}
export default App
