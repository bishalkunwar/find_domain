
import "./ResultContainer.css";
import NameCard from "../NameCard/NameCard";

export default function ResultContainer({suggestedNames}){
    const suggestedNamesRendered = suggestedNames.map((suggestedName)=>{
        return(
            <NameCard key={suggestedName} suggestedName={suggestedName}/>
        )
    });

    return(
       <div className="result-container">
            {suggestedNamesRendered}
       </div>
    );
};