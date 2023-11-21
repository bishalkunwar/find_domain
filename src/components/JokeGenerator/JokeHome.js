import { LandPage } from "./LandPage"
import "./JokeHome.css";

export default function JokeHome(){

    return(
        <div className="joke-app">
            <h1>Joke Generator App Using React via API.</h1>
            <LandPage className="landpage"/>
        </div>
    )
}