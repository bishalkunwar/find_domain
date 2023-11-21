
import { useState } from "react";
import "./CartHome.css";
import data from "./data.json" ;
import ShowCourses from "./ShowCourses";

export default function CartHome(){

    // const courses = useState(data);
    const dataRendered = data.map((data)=><ul><li key={data.id}>{data.name}</li></ul>)
    const[courses, setCourses]=useState(dataRendered);


    return(
        <div className="cart-home">
            <ShowCourses course={dataRendered}/>
        </div>
    );
};