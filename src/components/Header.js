import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return(
        <>
            <section>
                <div className="tema">
                    <p>Technical Challenge</p>
                    <p><FontAwesomeIcon icon={faStopwatch} /> <span>En menos de 5 minutos</span></p>
                </div>
                <div className="clipboard">
                    <FontAwesomeIcon icon={faClipboard} />
                </div>
            </section>
            <div className="progress"><div></div></div>
        </>
    );
}

export default Header;