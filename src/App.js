import { useState } from 'react';
import './App.css';
import { Buscador } from './components/Buscador';
import { Crear } from './components/Crear';
import { Listado } from './components/Listado';

function App() {

  // Tenemos el estado para trabajar con las listas de manera reactiva y poder comunicar los componentes
  const [ listadoState, setListadoState ] = useState([]);

  return (
    <div className="layout">

      {/* Cabecera */}
      <header className='header'>
        <div className='logo'>
          <div className='play'></div>
        </div>
        <h1>Mis películas</h1>
      </header>

      {/* Barra de navegación */}
      <nav className='nav'>
        <ul>
          <li>
            <a href='/#'>Inicio</a>
          </li>
          <li>
            <a href='/#'>Películas</a>
          </li>
          <li>
            <a href='/#'>Blog</a>
          </li>
          <li>
            <a href='/#'>Contacto</a>
          </li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <section className='content'>
        
        {/* Peliculas */}
        <Listado listadoState={listadoState} setListadoState={setListadoState}></Listado>
      </section>

      {/* Barra lateral */}
      <aside className='lateral'>

        <Buscador></Buscador>
        
        <Crear setListadoState={setListadoState} ></Crear>

      </aside>

      {/* Pie de página */}
      <footer className='footer'>
      &copy; PeliculApp - Carlos Garcia de Marina.
      </footer>

    </div>
  );
}

export default App;
