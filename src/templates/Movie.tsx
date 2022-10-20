import { MoviePageData } from "../pages/MoviePage";
import { moviesImg } from "../services/api";

const Movie = ({ poster_path, title, overview }: MoviePageData) => (
  <div>
    {
      <div className="flex gap-11">
        <img className="max-w-xs" src={`${moviesImg}${poster_path}`} alt="" />
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="my-4 max-w-lg">{overview}</p>
        </div>
      </div>
    }
  </div>
);

export default Movie;
