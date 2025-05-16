import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  // Memoize API call
  const fetchPopularMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();
    dispatch(addPopularMovies(jsonData.results));
  }, [dispatch]);

  useEffect(() => {
    if (!popularMovies || popularMovies.length === 0) {
      fetchPopularMovies();
    }
  }, [popularMovies, fetchPopularMovies]);
};

export default usePopularMovies;
