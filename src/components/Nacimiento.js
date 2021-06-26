import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather } from '@fortawesome/free-solid-svg-icons';

import perfil from '../recursos/img.jpg';

const Nacimiento = ({nacimiento, guardaNacimiento}) => {

    const { dia,  mes, year } = nacimiento;

    const guardaNa = e => {
        guardaNacimiento({
            ...nacimiento,
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
                    <span>¿Cuál es tu fecha de nacimiento?</span>
                    <input 
                        type="text"
                        placeholder="Día"
                        name="dia"
                        autoComplete="off"
                        value={dia}
                        onChange={e => guardaNa(e)}
                    />
                    <input
                        type="text"
                        placeholder="Mes"
                        name="mes"
                        autoComplete="off"
                        value={mes}
                        onChange={e => guardaNa(e)}
                    />
                    <input
                        type="text" 
                        placeholder="Año"
                        name="year"
                        autoComplete="off"
                        value={year}
                        onChange={e => guardaNa(e)}
                    />
                </div>
            </div>
            {dia !== '' || mes !== '' || year !==''
                ?
                    <div className="results">
                        {dia} {mes} {year}
                    </div>
                :
                    null
            }
            
        </>
    );
}

export default Nacimiento;