import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../components/Container";
import { api, apiKey } from "../services/api";
import Movie from "../templates/Movie";

export type MoviePageData = {
  title: string;
  overview: string;
  poster_path: string;
};

const MoviePage = () => {
  const { id } = useParams();

  const [movieData, setMovieData] = useState<MoviePageData>();

  useEffect(() => {
    api.get(`${id}?${apiKey}`).then((r) => {
      return setMovieData(r.data);
    });
  }, []);

  return <>{movieData && <Movie {...movieData} />}</>;
};

export default MoviePage;
