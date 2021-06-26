import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather } from '@fortawesome/free-solid-svg-icons';

import perfil from '../recursos/img.jpg';

const Nombre = ({nombre, guardaNombre}) => {

    const { nombre_f, nombre_s, apellido_p, apellido_m } = nombre;

    const guardaN = e => {
        guardaNombre({
            ...nombre,
            [e.target.name]: e.target.value
        })
    }

    return(
        <>
            <div className="card">
                <div className="perfil">
                    <img src={perfil} alt="perfil"/>
                    <div><FontAwesomeIcon icon={faFeather} /></div>
                </div>
                <div className="preguntas">
                    <span>¿Cuál es tu nombre?</span>
                    <input
                        type="text" 
                        placeholder="Nombre"
                        name="nombre_f"
                        autoComplete="off"
                        value={nombre_f}
                        onChange={e => guardaN(e)}
                    />
                    <input 
                        type="text"
                        placeholder="Segundo Nombre(opcional)"
                        name="nombre_s"
                        autoComplete="off"
                        value={nombre_s}
                        onChange={e => guardaN(e)}
                    />
                    <input 
                        type="text"
                        placeholder="Apellido paterno"
                        name="apellido_p"
                        autoComplete="off"
                        value={apellido_p}
                        onChange={e => guardaN(e)}
                    />
                    <input 
                        type="text"
                        placeholder="Apellido materno"
                        name="apellido_m"
                        autoComplete="off"
                        value={apellido_m}
                        onChange={e => guardaN(e)}
                    />
                </div>
            </div>
            {nombre_f !== '' || nombre_s !== '' || apellido_p !=='' || apellido_m !== ''
                ?
                    <div className="results">
                        {nombre_f} {nombre_s} {apellido_p} {apellido_m}
                    </div>
                :
                    null
            }
            
        </>
    );
}

export default Nombre;