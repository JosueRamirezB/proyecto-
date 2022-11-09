
import React from 'react';
import './App.css';

import Busqueda from './Busqueda/Busqueda';
import ListaContacto from './Listacontactos';
import Contacto from './Contacto';
import AgregarContacto from './AgregaContacto';
function App(props) {

  let contactos=[

    {
      nombre:"gullermo",
      telefono:"987654321",
      correo:"marcelo@gmail.com"
    }
,
    {
        nombre:"Marcelo",
        telefono:"987654321",
        correo:"marcelo@gmail.com"
    }
,
    {
      nombre:"fabian",
      telefono:"987654321",
      correo:"marcelo@gmail.com"
    }
  ]
let [textoBusqueda,setTextoBusqueda]=React.useState('');
let contactosFiltrados=[];
if(textoBusqueda.length>0){
 
  let textoBusquedaLowecase=textoBusqueda.toLowerCase();
  contactosFiltrados=contactos.filter((Contacto)=>{
   return Contacto.nombre.toLowerCase().includes(textoBusquedaLowecase);

  })
}
else{
contactosFiltrados=contactos;
}
  
  return (
  <React.Fragment>
    <h1> directorio</h1>
    <Busqueda textoBusqueda={textoBusqueda} setTextoBusqueda={setTextoBusqueda} />
    <ListaContacto>
    {
      contactosFiltrados.map((contactos)=>{
     return(
      <Contacto
      nombre={contactos.nombre}
      telefono={contactos.telefono}
      correo={contactos.correo}
      />
     )

      })
    }

      <Contacto/>
    </ListaContacto>
    <AgregarContacto/>

  </React.Fragment>
  );
}

export default App;
