import React from "react";

const DirectorioContext=React.createContext();
function DirectorioProvider(props){

    let contactos,contadorContactos ;
    if(!localStorage.contactos)
    
    {
      localStorage.setItem("contactos",JSON.stringify([]));
      contactos=[];
    }
    
    else
    {
    contactos=JSON.parse(localStorage.contactos);
    }
    
    
    let [textoBusqueda,setTextoBusqueda]=React.useState('');
    let [contactosState,setContactosState]=React.useState(contactos);
    let [Modal,setModal]=React.useState(false)
    let contactosFiltrados=[];
    
    function borrarcontactos(name)
    {
      let indice=contactosState.findIndex((Contacto)=>{
        return Contacto.nombre==name;
      });
      
    
      let contactosTemporal=[...contactosState];
      contactosTemporal.splice(indice,1);
      localStorage.setItem("contactos",JSON.stringify(contactosTemporal));
      setContactosState(contactosTemporal);
      console.log(indice);
    }
      
    function guardarContacto(Contacto){
      
      let contactosTemporal =[...contactosState]
      contactosTemporal.push(Contacto);
      localStorage.setItem("contactos", JSON.stringify(contactosTemporal));
      setContactosState(contactosTemporal);
    }

    if(textoBusqueda.length>0){
      let textoBusquedaLowecase=textoBusqueda.toLowerCase();
      contactosFiltrados=contactosState.filter((Contacto)=>{
       return Contacto.nombre.toLowerCase().includes(textoBusquedaLowecase);
    
      })
    }
    else{
    contactosFiltrados=contactosState;
    }
    contadorContactos=contactosFiltrados.length;
return(
    <DirectorioContext.Provider
    value={{
     
        textoBusqueda,setTextoBusqueda,contactosFiltrados,contactosState,
        setContactosState,borrarcontactos,contadorContactos,Modal,setModal,guardarContacto
    }}>

 {props.children}

    </DirectorioContext.Provider>
)

}

export {DirectorioContext, DirectorioProvider}
