import {Routes, Route } from 'react-router-dom'
import { MovieCard } from './components/MovieCard'
import Home from './pages/Home'
import Movie from './pages/Movie'

export const Router = () => (
  <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/movie/:id" element={<Movie />}/>
  </Routes>
)
 
