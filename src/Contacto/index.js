import React from "react";

import './Contacto.css';



function Contacto(props){

    function borrar(){
        props.borrarcontactos();

    }
    
return(
    <div>
<p>{props.nombre}</p>
<p>{props.telefono}</p>
<p>{props.correo}</p> 
<br/>
<button onClick={borrar}>borrar</button>
    </div>

)
}



export default Contacto