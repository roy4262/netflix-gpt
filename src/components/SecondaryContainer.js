import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies=useSelector((state)=>state.movies);
    return (
        <div className="bg-black">
    <div className="pl-12 -mt-52 relative z-20">
        <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
        <MovieList title={"Action Movies"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Scintific Movies"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Comedy Movies"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Action Movies"} movies={movies.nowPlayingMovies}/>
    </div>
    </div>
    );
}

export default SecondaryContainer;