import axios from 'axios'

export const Apisful = axios.create({
  // We are using apisful.com as a backend for this e-commerce website
  baseURL: 'https://api.apisful.com/v1/collections/',
  headers: {
    // Put your access key here
    'X-Api-Key': 'MKIU0N9EHlQP6D-RjSrwlxHIZ0AKYbw00T2Nb0MjSg8'
  },
  params: { 
    per_page: 16
  },
  validateStatus (status) {
    return status >= 200 && status < 500
  }
})
