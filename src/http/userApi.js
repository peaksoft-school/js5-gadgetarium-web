// import axios from 'axios'

import authApi from './index'

// const BASE_URL =
//    'http://gadgetarium-env.eba-edpzzr3j.eu-central-1.elasticbeanstalk.com/'

// export const registration = async (
//    email,
//    password,
//    firstName,
//    lastname,
//    phoneNumber
// ) => {
//    const response = await authApi.post('api/public/register', {
//       email,
//       password,
//       firstName,
//       lastname,
//       phoneNumber,
//    })
//    return response
// }

export const registration = async (userData) => {
   const response = await authApi.post('api/public/register', userData)
   if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
      console.log(response.data)
   }
   return response.data
}

// const login = async (userData) => {
//    const response = await axios.post(`${BASE_URL}/rest/users/login`, userData)
//    if (response.data) {
//       localStorage.setItem('user', JSON.stringify(response.data))
//    }
//    return response.data
// }

// const logout = () => {
//    localStorage.removeItem('user')
// }

// const authService = {
//    register,
//    // logout,
//    // login,
// }

// export default authService
