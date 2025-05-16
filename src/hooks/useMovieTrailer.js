import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const movieVideo = useSelector((store) => store.movies.addTrailerVideo);

  // Memoize the function so it can be safely used in dependencies
  const getMovieVideo = useCallback(async () => {
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
  }, [dispatch, movieId]);

  useEffect(() => {
    if (!movieVideo) getMovieVideo();
  }, [movieVideo, getMovieVideo]);
};

export default useMovieTrailer;
