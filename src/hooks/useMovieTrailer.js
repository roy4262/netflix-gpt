import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const movieVideo = useSelector((store) => store.movies.addTrailerVideo);

  const getMovieVideo = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      const trailers = json.results.filter((video) => video.type === "Trailer");
      const trailer = trailers[0];
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Failed to fetch movie trailer:", error);
    }
  };
// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!movieVideo) getMovieVideo();
  }, []);
};

export default useMovieTrailer;
