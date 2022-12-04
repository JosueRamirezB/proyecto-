
import React from 'react';
import './App.css';

import Busqueda from './Busqueda/Busqueda';
import ListaContacto from './Listacontactos';
import Contacto from './Contacto';
import AgregarContacto from './AgregaContacto';
import { DirectorioContext,DirectorioProvider} from './Context/DirectorioProvider';

function App() {
let modal=false;

  return (
 <DirectorioProvider>
  <DirectorioContext.Consumer>
  {
  ({
contactosFiltrados,
borrarcontactos,
contadorContactos,
Modal,
setModal


   })=>(
  <React.Fragment>
    <h1> Directorio[{contadorContactos}]</h1>
    <Busqueda  />
    <ListaContacto>
    {
      contactosFiltrados.map((contactos)=>{
     return(
      <Contacto
      nombre={contactos.nombre}
      telefono={contactos.telefono}
      correo={contactos.correo}
      borrarcontactos={()=>{borrarcontactos(contactos.nombre)}}
      />
     )

      })
    }

    </ListaContacto>
    <button onClick={()=>{setModal(true)}}>Agregar</button>
   {Modal&&<AgregarContacto/>} 

  </React.Fragment>

    )
  }
  </DirectorioContext.Consumer>
 </DirectorioProvider>



  );
}

export default App;

/*
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
*/