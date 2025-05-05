import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";

const MainContainer = () => {
    const movies =useSelector(store =>store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie=movies[0];
    // console.log(mainMovie);
    const {original_title,overview,id}= mainMovie;
    return (
        <div className="pt-[30%] bg-black md:p-0">
            <VideoTitle title={original_title} overview={ overview}/>
            <VideoBackGround movieId={id}/>
        </div>
    );
};


export default MainContainer;