import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Container } from "../components/Container"
import { Header } from "../components/Header"
import { MovieCard } from "../components/MovieCard"
import { api, apiKey } from "../services/api"

type ApiData = {
  id: number
  title: string
  vote_average: number
  poster_path: string
}

const Home = () =>  {
  const [movieData, setMovieData] = useState<ApiData[]>([])

  useEffect(() => {
    api.get(`top_rated?${apiKey}`).then((r) => {
      console.log(r.data.results)
      return setMovieData(r.data.results)
    })
    }, [])

  

   

  return (
    <>
      <Header />
      <Container >
        <h1 className="text-3xl font-bold mb-8">Melhores avaliados</h1>
        <div className="grid grid-cols-5 gap-8 justify-items-center">

        {movieData && 
          movieData.map((item) => <MovieCard
           key={item.id}
           title={item.title} 
           rating={item.vote_average} 
           url={item.poster_path}
           id={item.id}
           />
           )
           
         }
        </div>
      
  
      </Container>
      
    </>
  )}


export default Home