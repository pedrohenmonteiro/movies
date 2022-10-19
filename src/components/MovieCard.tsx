import { useEffect } from "react";
import { api, apiKey } from "../services/api"
import {FaStar} from 'react-icons/fa'
import { Link } from "react-router-dom";
import Rating from "./Rating";

export const MovieCard = () => {
  // useEffect(() => {
  //   api.get(`top_rated?${apiKey}`).then((r) => console.log(r.data))
  //   }, [])

    return (
<div className="max-w-[14rem]">
  <div className="relative">
  <img className="max-w-full rounded-3xl z-0" src="https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg" alt="" />       
  <div className="absolute bottom-[-0.875rem] left-6">
        <Rating rating={7} />
   </div>
  </div>


        <h2 className="font-bold text-gray-900 text-xl mt-3">The Godfather</h2>

         

        
      </div>
      
    )
     
  }
  
