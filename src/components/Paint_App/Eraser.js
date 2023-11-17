import React, { useState, useEffect, useRef } from "react";
import Menu from "./Menu";
import "./PaintHome.css";

export default function PaintHome() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState("black");
  const [lineOpacity, setLineOpacity] = useState(1);
  const [erase, setErase] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    setupCanvas(ctx);
    ctxRef.current = ctx;
  }, [lineColor, lineWidth, lineOpacity]);

  useEffect(() => {
    if (erase) {
      // Set eraser color to white
      ctxRef.current.strokeStyle = "white";
    } else {
      ctxRef.current.strokeStyle = lineColor;
    }
  }, [erase, lineColor]);

  const setupCanvas = (ctx) => {
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalAlpha = lineOpacity;
    ctx.lineWidth = lineWidth;
  };

  const startDraw = (e) => {
    const ctx = erase ? canvasRef.current.getContext("2d") : ctxRef.current;
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const endDraw = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) {
      return;
    }
    const ctx = erase ? canvasRef.current.getContext("2d") : ctxRef.current;
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const handleErase = () => {
    setErase(!erase);
  };

  return (
    <div className="paint-home">
      <h1>Paint App</h1>
      <div className="check-erase">
        <button onClick={handleErase}>{erase ? "Drawing" : "Eraser"}</button>
      </div>
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
      
    </div>
  );
}
