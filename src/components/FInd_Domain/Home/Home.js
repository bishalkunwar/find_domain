import Header from "../../Header";
import ResultContainer from "../../ResultContainer/ResultContainer";
import SearchBox from "../../SearchBox/SearchBox";
import { useState } from "react";
const name = require('@rstacruz/startup-name-generator');

export default function Home(){
    const[headerText, setHeaderText] = useState("Just Find IT!...")
    const[headerExpanded, setHeaderExpanded] = useState(true);
    const[suggestedNames, setSuggestedNames] = useState([]);

    const handleInputChange = (inputText) => {
        setHeaderText("Ops, There you GO!..");
        setHeaderExpanded(!(inputText.length>0));
        setSuggestedNames((inputText.length > 0)?name(inputText): [])
    }

    return(
        <div>
            <Header headTitle={headerText} headerExpanded={headerExpanded}/> 
            <SearchBox onInputChange={handleInputChange}/>
            <ResultContainer suggestedNames={suggestedNames}/>
        </div>

    );
};