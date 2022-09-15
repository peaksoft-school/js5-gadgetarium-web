/* eslint-disable import/order */
import AppRoutes from './routes/AppRoutes'
import 'react-toastify/dist/ReactToastify.css'
// import AllReviews from './components/admin/AllReviews'
import { ToastContainer } from 'react-toastify'

function App() {
   return (
      <div>
         <ToastContainer position="top-right" />
         <AppRoutes />
         {/* <AllReviews /> */}
      </div>
   )
}
export default App
