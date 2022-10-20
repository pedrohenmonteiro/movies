import { api, apiKey, moviesUrl } from "../services/api"
import { Link } from "react-router-dom";
import Rating from "./Rating";

type MovieCardProps = {
  title: string
  url: string
  rating: number
  id: number
}

export const MovieCard = ({title, url, rating, id}: MovieCardProps) => {
  

    return (    
  <div className="max-w-[12rem]">
        <Link to={`movie/${id}`}>
      <div className="relative">
      <img className="max-w-full rounded-xl z-0" src={`https://image.tmdb.org/t/p/w500/${url}`} alt="" />       
      <div className="absolute bottom-[-0.875rem] right-6">
        <Rating rating={rating} />
      </div>
      </div>
      </Link>

      <Link to={`movie/${id}`}>
      <h2 className="font-bold text-gray-900 text-sm my-6 ml-4 hover:text-blue-600">{title}</h2>
      </Link>
  </div>
      
    )
     
  }
  
