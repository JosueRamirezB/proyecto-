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
      <div className="button">
          <from className="inpt3">
              <h2 className="titulo1">Agregar Contactos</h2>
              <input placeholder="Nombre" onChange={onchangeNombre}></input>
              <input placeholder="Telefono" onChange={onchangeTelefono}></input>
              <input placeholder="Correro" onChange={onchangeCorreo}></input>
              <div className="botones">
                  <button typeof="sunmit" className="Canselar" onClick={modalCanselar}>Cancelar</button>
                  <button className="Agregar" onClick={modalAgregar}>Agregar</button>
              </div>
          </from>
      </div>
  )
}


export default AgregarContacto
