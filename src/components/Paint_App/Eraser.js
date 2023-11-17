import { useState, useEffect ,useRef } from "react";
import Menu from "./Menu";
import "./PaintHome.css";

export default function Eraser(){

    const canvasRef = useRef(null); 
    const ctxRef = useRef(null); 
    const eraserColor = useState("black");
    const[eraserSize, setEraserSize] = useState(10);
    const[isErasing, setIsErasing] = useState(false);

    useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.lineCap = "square";
        ctx.lineJoin = "square";
        // ctx.globalAlpha = lineOpacity;
        ctx.strokeStyle = eraserColor;
        ctx.lineWidth = eraserSize;
        ctxRef.current = ctx;
    }, [eraserColor, eraserSize ]);


    const startErase = (e) => { 
        ctxRef.current.beginPath(); 
        ctxRef.current.moveTo( 
            e.nativeEvent.offsetX, 
            e.nativeEvent.offsetY 
        ); 
        setIsErasing(true); 
    }; 

    const endErase = () => { 
        ctxRef.current.closePath(); 
        setIsErasing(false); 
    }; 

    const erase = (e) => { 
        if (!isErasing) { 
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
                    setEraserSize={setEraserSize} 
                /> 
                <canvas 
                    onMouseDown={startErase} 
                    onMouseUp={endErase} 
                    onMouseMove={erase} 
                    ref={canvasRef} 
                    width={`1280px`} 
                    height={`720px`} 
                /> 

            </div> 
        </div> 
    );

};


