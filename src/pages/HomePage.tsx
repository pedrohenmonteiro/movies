import { useEffect, useState } from "react";
import { api, apiKey } from "../services/api";
import Home from "../templates/Home";

export type MovieApiData = {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
};

export type HomeProps = {
  results: MovieApiData[];
};

const HomePage = () => {
  const [movieData, setMovieData] = useState<HomeProps>({ results: [] });

  useEffect(() => {
    api.get(`popular?${apiKey}`).then((r) => {
      console.log(r.data);
      return setMovieData(r.data);
    });
  }, []);

  return <Home {...movieData} />;
};

export default HomePage;
