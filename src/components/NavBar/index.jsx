import React from 'react';

//ver si esto es un componente funcional
const NavBar= () =>{
  return (
  <ul className='navbar'>
    <li>
      <a href="/">Inicio</a>
    </li>
    <li>
      <a href="/productos">Productos</a>
    </li>
    <li>
      <a href="/preguntas-frecuentes">FAQ</a>
    </li>
    <li>
      <a href="/contacto">Contacto</a>
    </li>
  </ul>
  );
}
export default NavBar;