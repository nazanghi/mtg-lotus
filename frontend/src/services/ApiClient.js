import axios from 'axios'

const ApiClient = axios.create({ baseURL: 'http://localhost:7777/api'})

ApiClient.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

export default ApiClient