import axios from 'axios'
const myAxios = axios.create()
if (process.env.NODE_ENV === 'development') {
  // myAxios.defaults.baseURL = 'http://localhost:8080'
  myAxios.defaults.baseURL = 'http://192.168.155.88:8080'
}
// myAxios.interceptors.request.use((config) => {
//   config.withCredentials = true
//   return config
// })
myAxios.interceptors.request.use(config => { return {...config, withCredentials: true} })
export default myAxios
