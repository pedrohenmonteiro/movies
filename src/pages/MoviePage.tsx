import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container } from "../components/Container"
import { Header } from "../components/Header"
import { api, apiKey } from "../services/api"

const MoviePage = () =>  {
const {id} = useParams()

const [movieData, setMovieData] = useState()

  useEffect(() => {
    api.get(`${id}?${apiKey}`).then((r) => {
      console.log(r.data)
      return setMovieData(r.data)
    })
    }, [])

  return(
  <>
  <Header />
  {movieData &&
  <div>
    <h2>{movieData.title}</h2>
  </div> 
  
}
</>
)}


export default MoviePage