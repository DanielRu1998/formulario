import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather } from '@fortawesome/free-solid-svg-icons';

import perfil from '../recursos/img.jpg';

const Contacto = ({contacto, guardaContacto}) => {

    const{ correo, telefono } = contacto;

    const guardaC = e => {
        guardaContacto({
            ...contacto,
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
            <span>Datos de contacto</span>
            <input 
                type="email"
                placeholder="Correo electrónico"
                name="correo"
                value={correo}
                onChange={e => guardaC(e)}
            />
            <input 
                placeholder="Teléfono celular"
                name="telefono"
                value={telefono}
                onChange={e => guardaC(e)}
            />
            </div>
        </div>
        {correo !== '' || telefono !== ''
                ?
                    <>
                        <div className="results">
                            {correo !== '' ? <p>Correo electrónico: {correo}</p> : null}
                            {telefono !== '' ? <p>Teléfono celular: {telefono}</p> : null}
                        </div>
                        <div className="card">
                            <div className="preguntas">
                                <p>Si tus datos son correctos por favor continuemos</p>
                            </div>
                        </div>
                    </>
                :
                    null
        }
        </>
    );
}

export default Contacto;