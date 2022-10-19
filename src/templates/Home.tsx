import { Link } from "react-router-dom"
import { Container } from "../components/Container"
import { Header } from "../components/Header"
import { MovieCard } from "../components/MovieCard"

const Home = () =>  (
    <>
      <Header />
      <Container >
        <div className="grid grid-cols-5 gap-8">
        <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
        </div>
      
      </Container>
      
    </>
  )


export default Home