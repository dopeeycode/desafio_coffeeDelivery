import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api-rest-coffe.onrender.com'
})