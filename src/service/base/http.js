import axios from 'axios'

const http = axios.create({ baseURL: process.env.API })

export default http
