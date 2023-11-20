import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import "../styles/contacto.css"

library.add(fab);

function Contacto(){
    return(
        <section id="contacto">
            <h1 className="h1-contacto">Contactanos</h1>
            <div className='div-contacto'>
                <a target="_blank" rel="noopener noreferrer"  className='a-icon a-whatsapp'>
                    <FontAwesomeIcon className='whatsapp' icon={faWhatsapp} /> 
                </a>
                <p className='p-numero'>0412-1234567</p>
            </div>

        </section>
    )
}

export default Contacto;