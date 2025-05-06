import React, { useRef } from 'react';
import { lang,GEMINI_API_KEY, API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';

import { GoogleGenAI } from "@google/genai";
import { addGptMovieResult } from '../utils/gptSlice';



const GptSearchBar = () => {
    const langkey=useSelector((store) =>store.config.lang);
    const SearchText=useRef(null);
    const dispatch=useDispatch();
//seach movie in tmdb api
    const searchMovieApi=async(movie)=>{
     
      const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);

      const json=await data.json();
      return json.results;
    }
  

    const handleGptSearch = async () => {
        const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
        const gptQuery =
            "Act as a movie recommendation system and suggest some movies for the query:" +
            SearchText.current.value +
            " only give me 10 movies, comma separated like the example result given ahead and remove hereare 5 . Example result: Bahubali, Kalki, RRR, Pushpa, KGF";

        try {
            // Generate movie suggestions using GPT
            const response = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: gptQuery,
            });

            const GptMovies = response.text.split(",").map((movie) => movie.trim());
            console.log("GPT Movies:", GptMovies);

            // Search GPT movies in TMDB API
            const PromiseArray = GptMovies.map((movie) => searchMovieApi(movie));
            const dataOfMovies = await Promise.all(PromiseArray);
            console.log("Movie Data:", dataOfMovies);

            // Dispatch serializable data
            dispatch(addGptMovieResult({ movieNames: GptMovies, movieResults: dataOfMovies }));
        } catch (error) {
            console.error("Error during GPT movie search:", error);
        }
    };

   

  return (
    <div className='pt-[30%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg' onClick={(e)=>e.preventDefault()}>
            <input  ref={SearchText} type='text' placeholder={lang[langkey].gptSearchHolder} className='p-4 m-4 col-span-8 rounded-md'/>
            <button className='py-2 px-4 bg-red-800 text-white rounded-md col-span-3 m-4' onClick={handleGptSearch}>{lang[langkey].Search}</button>
        </form>
    </div>
  )
}


 
export default GptSearchBar