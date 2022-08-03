// import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { GADGETARIUM_USER_DATA } from '../utils/constants/constants'
import { localStorageHelpers } from '../utils/helpers/general'

export default function ProtectedRoute({ element, roles }) {
   // const { role } = useSelector((state) => state.auth.user)
   const { role } = localStorageHelpers.getFromLocalStorage(
      GADGETARIUM_USER_DATA
   )
   console.log(role)
   const isUserHasRole = role && roles.includes(role)
   if (!isUserHasRole) return <Navigate to="/" replace />
   return element
}
