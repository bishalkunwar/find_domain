import "./SearchBox.css";

export default function SearchBox({onInputChange}){
    return(
        <div className="search-container">
            <input className="search-input" onChange={(e)=>onInputChange(e.target.value)} placeholder="Type Keyword Here" />
        </div>
    );
};