import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { NETFLIX_BACKGROUND } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
        <div className="fixed -z-10 ">
                <img
                  src={NETFLIX_BACKGROUND}
                  alt="background"
                />
              </div>
     
        
        <GptSearchBar/ >
        <GptMovieSuggestions/> 
    </div>
  )
}

export default GPTSearch