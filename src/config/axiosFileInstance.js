import axios from 'axios'

const BASE_URL =
   'http://gadgetarium-env.eba-edpzzr3j.eu-central-1.elasticbeanstalk.com/'

const headers = {
   'Content-Type': 'multipart/form-data',
}
const axiosFileInstance = axios.create({
   baseURL: BASE_URL,
   headers,
})

export default axiosFileInstance
