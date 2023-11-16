import { useState, useEffect ,useRef } from "react";
import Menu from "./Menu";
import "./PaintHome.css";

export default function PaintHome(){

    const canvasRef = useRef(null);
    const[isDrawing, setIsDrawing] = useState(false);
    const[lineColor, setLineColor] = useState("black");
    const[lineWidth, setLineWidth] = useState(5);
    const[lineOpacity, setLineOpacity] = useState(0.1);


    const startDraw = ()=>{

    };

    const endDraw = () => {

    };

    const draw = ()=>{

    };
    
    return(
        <div className="paint-home">
            <h1 className="app-header">
                Paint App
            </h1>
        
            <div className="draw-area">
                <Menu 
                    setLineColor = {setLineColor}
                    setLineWidth = {setLineWidth}
                    setLineOpacity = {setLineOpacity}
                />
                <canvas
                    onMouseDown={startDraw}
                    onMouseUp={endDraw}
                    onMouseMove={draw}
                    ref={canvasRef}
                    width={`128px`}
                    height={`720px`}
                />
            </div>



        </div>
    );
};