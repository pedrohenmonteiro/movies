import axios from 'axios'

export const moviesUrl = import.meta.env.VITE_API;
export const apiKey = import.meta.env.VITE_API_KEY;

export const api = axios.create({
  baseURL: moviesUrl
})