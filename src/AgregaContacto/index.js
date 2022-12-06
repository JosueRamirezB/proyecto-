import React from "react";
import { DirectorioContext } from "../Context/DirectorioProvider";
import './Agrega.css';




function AgregarContacto()
{
  const {setModal,guardarContacto}=React.useContext (DirectorioContext);
  const [contact,setContact]=React.useState({
      nombre:'',
      correo:'',
      telefono:''
  })

  function onchangeCorreo(event) {
      let contactoTemporal=contact;
      contactoTemporal.correo=event.target.value;
      setContact(contactoTemporal);
  };
  function onchangeTelefono(event) {
      let contactoTemporal=contact;
      contactoTemporal.telefono=event.target.value;
      setContact(contactoTemporal);
  };
  
  function onchangeNombre(event) {
      let contactoTemporal=contact;
      contactoTemporal.nombre=event.target.value;
      setContact(contactoTemporal);
  };

  function modalAgregar(event) {
      event.preventDefault();
      guardarContacto(contact);
      setModal(false);
  };

  function modalCanselar() {
      setModal(false);
  };

  return (
      <div className="caja1">
          <form className="caja">
              <h2 className="Agrega">Agregar Contactos</h2>
              <input placeholder="Nombre" onChange={onchangeNombre}></input>
              <input placeholder="Telefono" onChange={onchangeTelefono}></input>
              <input placeholder="Correro" onChange={onchangeCorreo}></input>
              <div className="botones">
                  <button typeof="sunmit" className="p" onClick={modalCanselar}>Cancelar</button>
                  <button className="p1" onClick={modalAgregar}>Agregar</button>
              </div>
          </form>
      </div>
  )
}


export default AgregarContacto
