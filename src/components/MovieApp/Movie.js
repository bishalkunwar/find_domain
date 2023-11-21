
import "./Movie.css";

import { useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";


export default function MovieApp(){

    const[video, setVideo]=useState("inception");
    const[videoURL, setVideoURL]=useState("https://youtu.be/sa9l-dTv9Gk")
    
    const handleSearch = () => {
        movieTrailer(video).then((res)=>{
            setVideoURL(res);
        });
    }

    return(
        <div className="movie-app">
            <div className="search-box">
                <label>
                    Search for any movies/shows: {" "}
                </label>
                <input 
                    type="text" onChange={(e)=>{setVideo(e.target.value)}}
                />

                <button onClick={()=>{handleSearch()}}>
                    Search
                </button>
            </div>

            <ReactPlayer url={videoURL} controls={true} />

        </div>
    );
};