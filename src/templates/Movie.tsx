import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { MoviePageData } from "../pages/MoviePage";
import { moviesImg } from "../services/api";

const Movie = ({ poster_path, title, overview }: MoviePageData) => (
  <>
    <Header />
    <Container>
      {
        <div className="flex-col-reverse sm:flex-row flex gap-11">
          <img
            className="self-center max-w-[16rem] md:max-w-xs"
            src={`${moviesImg}${poster_path}`}
            alt=""
          />
          <div>
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="my-4 max-w-lg">{overview}</p>
          </div>
        </div>
      }
    </Container>
  </>
);

export default Movie;
