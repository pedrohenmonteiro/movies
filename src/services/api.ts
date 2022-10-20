import axios from 'axios'

export const moviesUrl = import.meta.env.VITE_API;
export const apiKey = import.meta.env.VITE_API_KEY;
export const moviesImg = import.meta.env.VITE_IMG;


export const api = axios.create({
  baseURL: moviesUrl
})