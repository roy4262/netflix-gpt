const VideoTitle = (props)=>{
    return (
        <div className="w-screen aspect-video pt-[20%] p-6 md:px-24 absolute text-white bg-gradient-to-r from-black" >
            <h1 className="text-xl md:text-3xl font-bold">{props.title}</h1>
            <p className="md:inline-block hidden p-6 text-lg w-1/4">{props.overview}</p>
            <div className="my-2 md:m-0">
                <button className="bg-white text-black py-1 md:py-4  px-3 md:px-16 md:text-xl  rounded-sm hover:bg-opacity-80 ">▶Play</button>
                <button className="bg-gray-500 text-white p-4 px-12 md:text-xl rounded-sm bg-opacity-50 m-0  md:mx-2 hidden md:inline-block">ℹ More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle; 