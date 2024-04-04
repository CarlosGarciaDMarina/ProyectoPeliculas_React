import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const titulo_componente = "Editar pelicula"

    // Metodo vinculado a onSubmit para actualizar el objeto en concreto 
    const guardarEdicion =(e, id) => {
        e.preventDefault();
        
        // Conseguimos el target del evento
        let target = e.target;

        //Buscar el indice del objeto de la pelicula a actualizar
        const pelis_almacenadas = conseguirPeliculas();

        // Buscamos el indice
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);// Si peli.id es exactamente igual que el id que queremos editar devolveremos el indice que queremos actualizar
    
        // Creamos un objeto con el id de ese indice con el titulo y la descripcion del form
        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        };
        // Actualizamos el elemento con ese indice
        pelis_almacenadas[indice] = peli_actualizada;

        // Guardamos el nuevo arry de objetos en el local storage
        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

        // Actualizamos estados
        setListadoState(pelis_almacenadas);
        setEditar(0); // Para que cierre el formulario 
    }

  return (
    <div className='edit_form'>
        <hr></hr>
        <h3 className='title'>{titulo_componente}</h3>
        <form onSubmit={e => guardarEdicion(e, peli.id)}>
            <input type='text' 
                    name='titulo' 
                    className='titulo_editado'
                    defaultValue={peli.titulo} />

            <textarea name='descripcion' 
                      defaultValue={peli.descripcion} 
                      className='descripcion_editada' />

            <input type='submit' 
                   className='editar' 
                   value="Actualizar" />
        </form>
    </div>
  )
}
