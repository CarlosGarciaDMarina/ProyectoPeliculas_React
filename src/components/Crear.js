import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({ setListadoState}) => {

    // Nombramos variables para utilizarlas en el HTML
    const tituloComponente = "Añadir película";

    // Creamos un estado para gestionar nuestros estados de la app
    const  [ peliState, setPeliState ]  = useState({
        titulo: '',
        descripcion: ''
    });

    const { titulo, descripcion } = peliState;

    // Funcion onSUbmit
    const conseguirDatosForm = e => {
        // Evitamos el refresco de pantalla
        e.preventDefault();

        // Conseguir datos del formulatio
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        // Crear el objeto de la pelicula a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        // Guardamos la info en el estado
        setPeliState(peli);

        // Actualizamos el estado del listado prioncipal
        setListadoState(elementos =>{
            return [...elementos, peli]; // con esto hacemos un push al array original manteniendo los que ya habia (...elementos)
        });

        // Guardar en el local storage
        GuardarEnStorage("pelis", peli);

    }



  return (
    <div className='add'>
        <h3 className='title'>{tituloComponente}</h3>

        <strong>
            {/* Si existe un titulo y una descripcion nos lo enseña */}
            {(titulo && descripcion) && "Has creado la pelicula: " + titulo}
        </strong>

        <form onSubmit={conseguirDatosForm}>
            <input type='text' placeholder='Título' id='titulo' name='titulo' />
            <textarea placeholder='Descripción' id='descripcion' name='descripcion' />
            <input type='submit' value="Guardar" id='save' />
        </form>
  </div>
  )
}
