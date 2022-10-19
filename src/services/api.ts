import axios from 'axios'

export const api1 = axios.create({
  baseURL: 'http://localhost:3000/api',
})

export const api = (id: number) => {
  return axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/${id}?api_key=6452aecfeb8360638c56b64a334a03e2`
  })
}