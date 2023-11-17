// import { useState, useEffect ,useRef } from "react";
// import Menu from "./Menu";
// import "./PaintHome.css";

// export default function PaintHome(){

//     const canvasRef = useRef(null); 
//     const ctxRef = useRef(null);
//     const ctxReff = useRef(null); 
//     const [isDrawing, setIsDrawing] = useState(false); 
//     const [lineWidth, setLineWidth] = useState(5); 
//     const [lineColor, setLineColor] = useState("black"); 
//     const [lineOpacity, setLineOpacity] = useState(0.1);
//     const eraserColor = useState("white");
//     const[eraserSize, setEraserSize] = useState(10);
//     const[isErasing, setIsErasing] = useState(false);
//     const[erase, setErase] = useState(false);

//     useEffect(()=>{
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");
//         const ctxE = canvas.getContext("4d");
//         ctx.lineCap = "round";
//         ctx.lineJoin = "round";
//         ctxE.lineCap = "square";
//         ctxE.lineJoin = "square";
//         ctx.globalAlpha = lineOpacity;
//         ctx.strokeStyle = lineColor;
//         ctx.lineWidth = lineWidth;
//         ctxRef.current = ctx;
//         ctxE.strokeStyle = eraserColor;
//         ctxE.lineWidth = eraserSize;
//         ctxReff.current = ctxE;
//     }, [lineColor, lineWidth, lineOpacity, eraserColor, eraserSize]);


//     const startDrawing = (e) => { 
//         ctxRef.current.beginPath(); 
//         ctxRef.current.moveTo( 
//             e.nativeEvent.offsetX, 
//             e.nativeEvent.offsetY 
//         ); 
//         setIsDrawing(true); 
//     }; 

//     const endDrawing = () => { 
//         ctxRef.current.closePath(); 
//         setIsDrawing(false); 
//     }; 

//     const draw = (e) => { 
//         if (!isDrawing) { 
//             return; 
//         } 
//         ctxRef.current.lineTo( 
//             e.nativeEvent.offsetX, 
//             e.nativeEvent.offsetY 
//         ); 
  
//         ctxRef.current.stroke(); 
//     };

//     const startErase = (e) => { 
//         ctxReff.current.beginPath(); 
//         ctxReff.current.moveTo( 
//             e.nativeEvent.offsetX, 
//             e.nativeEvent.offsetY 
//         ); 
//         setIsErasing(true); 
//     }; 

//     const endErase = () => { 
//         ctxReff.current.closePath(); 
//         setIsErasing(false); 
//     }; 

//     const eraseDraw = (e) => { 
//         if (!isErasing) { 
//             return; 
//         } 
//         ctxReff.current.lineTo( 
//             e.nativeEvent.offsetX, 
//             e.nativeEvent.offsetY 
//         ); 
  
//         ctxReff.current.stroke(); 
//     };

//     const pencil = () => {
//         return(
//             <div className="paint-home"> 
//                     <h1>Paint App</h1> 
//                     <div className="draw-area"> 
//                         <Menu 
//                             setLineColor={setLineColor} 
//                             setLineWidth={setLineWidth} 
//                             setLineOpacity={setLineOpacity} 
//                         /> 
//                         <canvas 
//                             onMouseDown={startDrawing} 
//                             onMouseUp={endDrawing} 
//                             onMouseMove={draw} 
//                             ref={canvasRef} 
//                             width={`1280px`} 
//                             height={`720px`} 
//                         /> 
//                     </div> 
//                 </div> 
//             );
//         }


//     const eraser = () => {
//         return(
//             <div className="paint-home"> 
//                 <h1>Paint App</h1> 
//                 <div className="draw-area"> 
//                     <Menu 
//                         setEraserSize={setEraserSize} 
//                     /> 
//                     <canvas 
//                         onMouseDown={startErase} 
//                         onMouseUp={endErase} 
//                         onMouseMove={eraseDraw} 
//                         ref={canvasRef} 
//                         width={`1280px`} 
//                         height={`720px`} 
//                     /> 
    
//                 </div> 
//             </div> 
//         );
//     }

//     const handleErase = (e) => {
//         setErase(true);
//         e.target.preventDefault();
//     }
    
//     return(
//         <div>
//             <div className="check-erase">
//                 <button onClick={()=>handleErase}>Eraser</button>
//             </div>
//             <div className="rendering-main">
//                 {erase ? {pencil}: {eraser}}
//             </div>
//         </div>
//     );
// };

import { useState, useEffect, useRef } from "react";
import Menu from "./Menu";
import "./PaintHome.css";

export default function PaintHome() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const eraserCtxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState("black");
  const [lineOpacity, setLineOpacity] = useState(1);
  const [erase, setErase] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalAlpha = lineOpacity;
    ctx.strokeStyle = erase ? "blue" : lineColor; // Use white color for eraser
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;

    const eraserCtx = canvas.getContext("2d");
    eraserCtx.lineCap = "square";
    eraserCtx.lineJoin = "square";
    eraserCtx.strokeStyle = "white"; // Set eraser color to white
    eraserCtx.lineWidth = lineWidth;
    eraserCtxRef.current = eraserCtx;
  }, [lineColor, lineWidth, lineOpacity, erase]);

  const startDraw = (e) => {
    const ctx = erase ? eraserCtxRef.current : ctxRef.current;
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const endDraw = () => {
    const ctx = erase ? eraserCtxRef.current : ctxRef.current;
    ctx.closePath();
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) {
      return;
    }
    const ctx = erase ? eraserCtxRef.current : ctxRef.current;
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const handleErase = () => {
    setErase(!erase);
  };

  return (
    <div className="paint-home">
      <h1>Paint App</h1>
      <div className="draw-area">
        <Menu
          setLineColor={setLineColor}
          setLineWidth={setLineWidth}
          setLineOpacity={setLineOpacity}
        />
        <canvas
          onMouseDown={startDraw}
          onMouseUp={endDraw}
          onMouseMove={draw}
          ref={canvasRef}
          width={`1280px`}
          height={`720px`}
        />
      </div>
      <div className="check-erase">
        <button onClick={handleErase}>Eraser</button>
      </div>
    </div>
  );
}

