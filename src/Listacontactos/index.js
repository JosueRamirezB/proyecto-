import React from "react";





function ListaContacto(props){
return(
<div>
  <h2>Mis contactos</h2>
  {props.children}
</div>
)
}



export default ListaContacto