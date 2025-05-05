import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { NETFLIX_BACKGROUND } from '../utils/constants'

const GPTSearch = () => {
  return (
<>
<div className="fixed -z-10 ">
        <img
          src={NETFLIX_BACKGROUND}
           alt="background"
           className='h-screen object-cover md:h-auto md:object-contain'
        />
 </div>
    <div className='pt-[30%] md:p-0'>   
        <GptSearchBar/ >
        <GptMovieSuggestions/> 
    </div>

</>


   
  )
}

export default GPTSearch;