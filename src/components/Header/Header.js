import "./Header.css";

export default function Header({headTitle}){

    return(
        <div className="head-container">
            <h1 className="head-text">
                {headTitle}
            </h1>
        </div>
    );
};