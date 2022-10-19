import { Link } from "react-router-dom"

const Home = () =>  (
    <div>
      <h2>
        <Link to="/">Movies</Link>
        <Link to="/movie/2">Teste</Link>

      </h2>
    </div>
  )


export default Home