import {BiMoviePlay} from 'react-icons/bi'
import { Container } from './Container'

export const Header = () =>  (
<div className="bg-slate-900 p-3 mb-8">
  <Container>
    <div className="flex justify-between">
    <h1 className="text-4xl font-bold flex gap-2 items-center text-gray-200">
    <BiMoviePlay className="text-slate-600"/>
    Movies
  </h1>

  <input type="text" className="border-gray-400 px-3 bg-gray-200 border-2 rounded"/>
    </div>
  
  </Container>
</div>

)

  

