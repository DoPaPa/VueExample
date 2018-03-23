import axios from 'axios'
const myAxios = axios.create()
if (process.env.NODE_ENV === 'development') {
  myAxios.defaults.baseURL = 'http://localhost:8080'
}
export default myAxios
