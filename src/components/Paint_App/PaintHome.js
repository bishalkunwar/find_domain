import { useState, useEffect ,useRef } from "react";
import Menu from "./Menu";
import "./PaintHome.css";

export default function PaintHome(){

    const canvasRef = useRef(null); 
    const ctxRef = useRef(null); 
    const [isDrawing, setIsDrawing] = useState(false); 
    const [lineWidth, setLineWidth] = useState(5); 
    const [lineColor, setLineColor] = useState("black"); 
    const [lineOpacity, setLineOpacity] = useState(0.1);

    useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.globalAlpha = lineOpacity;
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        ctxRef.current = ctx;
    }, [lineColor, lineWidth, lineOpacity]);


    const startDrawing = (e) => { 
        ctxRef.current.beginPath(); 
        ctxRef.current.moveTo( 
            e.nativeEvent.offsetX, 
            e.nativeEvent.offsetY 
        ); 
        setIsDrawing(true); 
    }; 

    const endDrawing = () => { 
        ctxRef.current.closePath(); 
        setIsDrawing(false); 
    }; 

    const draw = (e) => { 
        if (!isDrawing) { 
            return; 
        } 
        ctxRef.current.lineTo( 
            e.nativeEvent.offsetX, 
            e.nativeEvent.offsetY 
        ); 
  
        ctxRef.current.stroke(); 
    };
    

    return(
        <div className="paint-home"> 
            <h1>Paint App</h1> 
            <div className="draw-area"> 
                <Menu 
                    setLineColor={setLineColor} 
                    setLineWidth={setLineWidth} 
                    setLineOpacity={setLineOpacity} 
                /> 
                <canvas 
                    onMouseDown={startDrawing} 
                    onMouseUp={endDrawing} 
                    onMouseMove={draw} 
                    ref={canvasRef} 
                    width={`1280px`} 
                    height={`720px`} 
                /> 
            </div> 
        </div> 
    );
};


