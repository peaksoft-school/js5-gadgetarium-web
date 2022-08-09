import axios from 'axios'
// import { toast } from 'react-toastify'

let store

export const injectStore = (_store) => {
   store = _store
}

const BASE_URL =
   'http://gadgetarium-env.eba-edpzzr3j.eu-central-1.elasticbeanstalk.com/'

const headers = {
   Accept: 'application/json',
   'Content-Type': 'application/json;charset=UTF-8',
}

const axiosInstance = axios.create({
   baseURL: BASE_URL,
   headers,
})

axiosInstance.interceptors.request.use((config) => {
   const updatedConfig = { ...config }
   const {
      user: { jwt },
   } = store.getState().auth
   if (jwt) updatedConfig.headers.Authorization = `Bearer ${jwt}`
   return updatedConfig
})

// axiosInstance.interceptors.response.use(
//    ((updatedConfig) => updatedConfig,
//    (error) => {
//       if (error.response.status === 401) {
//          toast.error('Ошибка с авторизацией')
//       }
//    })
// )

// api.interceptors.request.use((config) => {
//    const { auth: { token } } = store.getState();
//    const authConfig = { ...config };
//    if (token) {
//      authConfig.headers.Authorization = token;
//    }
//    return authConfig;
//  });
//  api.interceptors.response.use((res) => res, (error) => {
//    const { response: { data } } = error;
//    store.dispatch(showToast(data.error));
//    store.dispatch(hideLoading());
//    throw error;
//  });

export default axiosInstance
