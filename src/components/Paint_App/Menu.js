import "./PaintHome.css";

export default function Menu({setLineColor, setLineWidth, setLineOpacity, setEraserSize}){

    return(
        <div className="menu-bar">
            <div className="menu-painter">
                <label>Brush Color</label>
                <input type="color" onChange={(e)=>setLineColor(e.target.value)}/>
                
                <label>Brush Width</label>
                <input type="range" min="3" max="20" onChange={(e)=>setLineWidth(e.target.value)}/>

                <label>Brush Opacity</label>
                <input type="range" min="1" max="100" onChange={(e)=>setLineOpacity(e.target.value/100)}/>
            </div>
            {/* <div className="menu-eraser">
                <label>Eraser</label>
                <input type="range" min="3" max="20" onChange={(e)=>setEraserSize(e.target.value)}/>
            </div> */}
        </div>
    );
};