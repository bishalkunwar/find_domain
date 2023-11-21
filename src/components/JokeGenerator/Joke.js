import {useState} from "react";
import { LandPage } from "./LandPage";

export const Joke=()=>{

    const[Joke, setJoke] = useState("");


    const fetchJoke = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res)=>res.json())
            .then((data)=>setJoke(data.joke));
    };

    return(
        <div className="joke">
            <LandPage callApi={fetchJoke}/>
            <p>{Joke}</p>
        </div>
        
    )
}