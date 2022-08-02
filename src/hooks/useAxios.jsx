// import { useState, useEffect } from 'react'

// const useAxios = (configObj) => {
//    const { axiosInstance, method, url, requestConfig = {} } = configObj

//    const [response, setResponse] = useState([])
//    const [error, setError] = useState('')
//    const [loading, setLoading] = useState(true)

//    useEffect(() => {
//       const controller = new AbortController()

//       const fetchData = async () => {
//          try {
//             const res = await axiosInstance[method.toLowerCase()](url, {
//                ...requestConfig,
//                signal: controller.signal,
//             })
//             console.log(res)
//             setResponse(res.data)
//          } catch (err) {
//             console.log(err.message)
//             setError(err.message)
//          } finally {
//             setLoading(false)
//          }
//       }

//       fetchData()
//       // useEffect cleanup function
//       return () => controller.abort()
//    }, [])

//    return [response, error, loading]
// }

// export default useAxios

import { useEffect, useState } from 'react'

// import axios from 'axios'
// import authApi from '../http'
import { registration } from '../http/userApi'

const useFetchData = () => {
   const [data, setData] = useState({})
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      const fetchData = async () => {
         try {
            const { data: response } = await registration(response)
            setData(response)
         } catch (error) {
            console.error(error)
         }
         setLoading(false)
      }

      fetchData()
   }, [])

   return {
      data,
      loading,
   }
}

export default useFetchData
