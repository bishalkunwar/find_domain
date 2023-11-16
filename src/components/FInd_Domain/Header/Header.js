import "./Header.css";

export default function Header({headTitle, headerExpanded}){

    return(
        <div className="head-container">
            <h1 className="head-text">
                {headTitle}
            </h1>
        </div>
    );
};