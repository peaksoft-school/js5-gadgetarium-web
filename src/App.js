import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
