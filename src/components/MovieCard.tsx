import { api, apiKey } from "../services/api"
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
  <div className="relative">
  <img className="max-w-full rounded-2xl z-0" src={`https://image.tmdb.org/t/p/w500/${url}`} alt="" />       
  <div className="absolute bottom-[-0.875rem] right-6">
        <Rating rating={rating} />
   </div>
  </div>

  <h2 className="font-bold text-gray-900 text-xl mt-4 ml-4">{title}</h2>
      </div>
      
    )
     
  }
  
