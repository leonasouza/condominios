import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL

export const getMoradores = (): Promise<any> => {
  return axios.get(`${API_URL}/morador`)
}