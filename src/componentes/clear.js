import React from "react";
import "../estilos/clear.css";

const Clear = (props) =>(
    <div className="boton-clear" onClick={props.manejarClear}>
        {props.children}
    </div>
);
export default Clear;