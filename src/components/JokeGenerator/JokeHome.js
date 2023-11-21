import { Joke } from "./Joke";
import "./JokeHome.css";

export default function JokeHome(){

    return(
        <div className="joke-app">
            <h1>Joke Generator App Using React via API.</h1>
            <Joke/>
        </div>
    )
}