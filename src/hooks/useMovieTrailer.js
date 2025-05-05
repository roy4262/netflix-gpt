import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
const useMovieTrailer = (movieId) =>{
    const dispatch=useDispatch();


    //fetch trailer by api call using movieId and store trailer in redux store
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
        getMovieVideo();
     },[]);

}
export default useMovieTrailer;