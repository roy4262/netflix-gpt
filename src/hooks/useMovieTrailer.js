import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
const useMovieTrailer = (movieId) =>{
    const dispatch=useDispatch();


    //fetch trailer by api call using movieId and store trailer in redux store

    //memorizationnto prevent re rennder api calls
    const movieVideo=useSelector(store=>store.movies.addTrailerVideo);
    const getMovieVideo = async () => {
        const data =await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS)

        const json= await data.json();
        // console.log(json);

        const trailers =json.results.filter((video)=> video.type ==="Trailer");
        const trailer=trailers[0];
        dispatch(addTrailerVideo(trailer));
        // console.log(trailer);   
    }
     useEffect (()=>{
        !movieVideo && getMovieVideo();
     },[]);

}
export default useMovieTrailer;