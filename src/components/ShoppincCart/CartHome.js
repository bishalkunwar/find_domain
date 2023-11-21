
// import { useState } from "react";
import "./CartHome.css";
import data from "./data.json" ;

export default function CartHome(){

    // const courses = useState(data);
    const dataRendered = data.map((data)=><ul><li key={data.id}>{data.name}</li></ul>)

    return(
        <div className="cart-home">
            <p>{dataRendered}</p>
        </div>
    );
};