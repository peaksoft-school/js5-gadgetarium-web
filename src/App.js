/* eslint-disable import/order */
import AppRoutes from './routes/AppRoutes'
import 'react-toastify/dist/ReactToastify.css'
// import AllReviews from './components/admin/AllReviews'
import { ToastContainer } from 'react-toastify'
// import { useEffect } from 'react'
// import { getReviews } from './store/actions/adminReviewAction'
// import { useSelector, useDispatch } from 'react-redux'

function App() {
   // const { feedbacks } = useSelector((state) => state.adminFeedbacks)
   // console.log(feedbacks, 'fsdfds')
   // const dispatch = useDispatch()

   // useEffect(() => {
   //    dispatch(getReviews())
   // }, [])

   return (
      <div>
         <ToastContainer position="top-right" />
         <AppRoutes />
         {/* <AllReviews /> */}
      </div>
   )
}
export default App
