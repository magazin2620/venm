import axios from 'axios'

const API_URL = 'https://mev2n.herokuapp.com/api'

export const request = async ({ url, method, data = {} }) => {
  const response = await axios[method](`${API_URL}/${url}`, data)
  return response.data
}
