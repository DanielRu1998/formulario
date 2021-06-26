import { useState } from 'react';
import Header from './components/Header';
import Nombre from './components/Nombre';
import Nacimiento from './components/Nacimiento';
import Contacto from './components/Contacto';

import clienteAxios from './config/axios';
import './index.css';

function App() {

  //states de los campos del form
  const[nombre, guardaNombre] = useState({
    nombre_f: '',
    nombre_s: '',
    apellido_p: '',
    apellido_m: ''
  });
  const[nacimiento, guardaNacimiento] = useState({
    dia: '',
    mes: '',
    year: ''
  });
  const[contacto, guardaContacto] = useState({
    correo: '',
    telefono: ''
  })
  const[etiqueta, guardaEtiqueta] = useState('');
  const[error, guardaError] = useState('');

  const iniciaSesion = async(e) =>{
    e.preventDefault();
    if(nombre.nombre_f === '' || nombre.apellido_p === '' || nombre.apellido_m === '' || nacimiento.dia === '' || nacimiento.mes === '' || nacimiento.year === '' || contacto.correo === '' || contacto.telefono === ''){
      guardaError(
        <div className="error">
          <p>No debe haber un campo vacío</p>
        </div>
      )
      return;
    }
    guardaError('');
    //pasa con exito
    const fecha_n = `${nacimiento.dia} ${nacimiento.mes} ${nacimiento.year}`;
    await clienteAxios.post('/', { nombre, fecha_n, contacto });//Eviando al back
    guardaEtiqueta(
      <div className="results">
        <p>Fecha de nacimiento: {nacimiento.dia} {nacimiento.mes} {nacimiento.year}</p>
        <p>Correo electrónico: {contacto.correo}</p>
        <p>Teléfono celular: {contacto.telefono}</p>
        <p>Nombre: {nombre.nombre_f} {nombre.nombre_s} {nombre.apellido_p} {nombre.apellido_m}</p>
      </div>
    )
  }
  return (
    <>
      <Header />
      <form>
        <Nombre 
          nombre={nombre}
          guardaNombre={guardaNombre}
        />
        <Nacimiento 
          nacimiento={nacimiento}
          guardaNacimiento={guardaNacimiento}
        />
        <Contacto 
          contacto={contacto}
          guardaContacto={guardaContacto}
        />
        {error !== '' ? error : null}
        <div className="boton_f">
          <input 
              type="submit"
              className="miSubmit"
              value="Iniciar"
              onClick={iniciaSesion}
          />
        </div>
      </form>
      {etiqueta !== '' ? etiqueta : null}
    </>
  );
}

export default App;
