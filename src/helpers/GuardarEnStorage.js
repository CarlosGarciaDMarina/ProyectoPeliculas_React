// Este metodo guarda un array de peliculas en el local storage
export const GuardarEnStorage = (clave, elemento) => {
    // Encerramos en un try-catch para gestionar posibles errores
    try {
        // Conseguir los elementos que tenemos en el LocalStorage
        let elementos = JSON.parse(localStorage.getItem(clave)) || [];

        // Comprobamos si son un array
        if(elementos && Array.isArray(elementos)){
            // Si es un array añadimos el nuevo elemento al array
            elementos.push(elemento);
        } else {
            // Si no, creamos un array con el nuevo elemento
            elementos = [elemento];
        }
        // Guardar en el local storage, usamos el JSON.stringify para poder guardar el dato correctamente
        localStorage.setItem(clave, JSON.stringify(elementos));

        // Devolvemos el objeto
        return elemento;

    } catch (error) {
        // Imprimimos en consola posibles errores
        console.log(error);
    }
}