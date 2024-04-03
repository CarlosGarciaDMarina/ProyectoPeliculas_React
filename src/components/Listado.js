import React, { useEffect, useState } from 'react'

export const Listado = ({listadoState, setListadoState}) => {


  // const [ listadoState, setListadoState ] = useState([]);

  useEffect(() => {
    console.log("Componentes del listado del listado de peliculas cargado!!");
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));

    setListadoState(peliculas);

    // Hacemos el return de peliculas para poder sacar los datos de las peliculas almacenadas
    return peliculas;

  }

  // Función para eliminar una pelicula del listado
  const borrarPeli = (id) => {
    // Conseguir películas almacenadas
    let pelis_almacenadas = conseguirPeliculas();

    // Filtrar peliculas para que elimine del array la que quiero, nos quedamos con las pelis cuyo id sea distinto de la id que recogemos en la funcion
    let nuevo_listado_peliculas = pelis_almacenadas.filter(peli => peli.id !== parseInt(id))

    // Actualizar el estado del listado
    setListadoState(nuevo_listado_peliculas);

    // Actualizar los datos en el local storage
    localStorage.setItem("pelis", JSON.stringify(nuevo_listado_peliculas));
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
              <button className='delete' onClick={() => borrarPeli(peli.id)}>Borrar</button>
            </article>

          );
        })
        /* Ternaria : */
        : <h2>No hay peliculas para mostrar</h2>
      
      }
    </>
  )
}
