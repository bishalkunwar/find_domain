import { LandPage } from "./LandPage";

export default function Joke(){

    return(
        <div className="joke">
            <LandPage callApi={fetchJoke}/>
            <p>{Joke}</p>
        </div>
        
    )
}