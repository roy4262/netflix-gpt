const VideoTitle = (props)=>{
    return (
        <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black" >
            <h1 className="text-3xl font-bold">{props.title}</h1>
            <p className="p-6 text-lg w-1/4">{props.overview}</p>
            <div>
                <button className="bg-white text-black p-4 px-12 text-xl rounded-sm hover:bg-opacity-80 ">▶Play</button>
                <button className="bg-gray-500 text-white p-4 px-12 text-xl rounded-sm bg-opacity-50 mx-2">ℹ More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle;