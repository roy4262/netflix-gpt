import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  // ✅ useCallback ensures this function is stable between renders
  const fetchNowPlayingMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();
    dispatch(addNowPlayingMovies(jsonData.results));
  }, [dispatch]);

// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
      fetchNowPlayingMovies();
    }
  }, [nowPlayingMovies, fetchNowPlayingMovies]);
};

export default useNowPlayingMovies;
