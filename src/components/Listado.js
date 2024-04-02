import React, { useEffect, useState } from 'react'

export const Listado = () => {


  const [ listadoState, setListadoState ] = useState([]);

  useEffect(() => {
    console.log("Componentes del listado del listado de peliculas cargado!!");
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));

    setListadoState(peliculas);

  }

  return (
    <>
      { listadoState != null ? /* Condicion con la ternaria ? que es pera los dos puntos : */
        listadoState.map(peli => {

          return (

            <article key={peli.id} className='peli-item'>
              <h3 className='title'>{peli.titulo}</h3>
              <p className='description'>{peli.descripcion}</p>
      
              <button className='edit'>Editar</button>
              <button className='delete'>Borrar</button>
            </article>

          );
        })
        /* Ternaria : */
        : <h2>No hay peliculas para mostrar</h2>
      
      }
    </>
  )
}
