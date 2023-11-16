
import "./NameCard.css";
const nameCheapUrl = "https://www.namecheap.com/domains/registration/results/?domain=";

export default function NameCard({suggestedName}){

    return(
        <a className="card-link" target="__blank" rel="noreffer" href={`${nameCheapUrl} ${suggestedName}`}>
            <div className="result-name-card">
                <p className="result-name">{suggestedName}</p>
            </div>
        </a>
    );
};