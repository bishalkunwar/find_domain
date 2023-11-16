import "./PaintHome.css";

export default function Menu({setLineColor, setLineWidth, setLineOpacity}){

    return(
        <div className="menu">
            <label>Brush Color</label>
            <input type="color" onChange={(e)=>setLineColor(e.target.value)}/>
            
            <label>Brush Width</label>
            <input type="range" min="3" max="20" onChange={(e)=>setLineWidth(e.target.value)}/>

            <label>Brush Opacity</label>
            <input type="range" min="1" max="100" onChange={(e)=>e.target.value/100}/>
        </div>
    );
};