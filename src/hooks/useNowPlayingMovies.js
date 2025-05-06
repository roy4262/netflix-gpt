import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

 const useNowPlayingMovies = () => {
     const dispatch=useDispatch();
     //memorization to prevent re render api calls
     const getNowPlayingMovies=useSelector((store)=>store.movies.nowPlayingMovies);
        const nowPlayingMovies=async ()=>{
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    
            const jsonData=await data.json();
            dispatch(addNowPlayingMovies(jsonData.results));
    
            // console.log(jsonData.results);
        }
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      useEffect( () =>{
        if(!getNowPlayingMovies) nowPlayingMovies();
      },[]);
}

export default useNowPlayingMovies;