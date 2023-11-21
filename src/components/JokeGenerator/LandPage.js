
import "./Landpage.css";

export const LandPage =(props)=>{

    return(
        <button onClick={props.callApi}>
            Click To Generate a Joke.
        </button>
    );
};