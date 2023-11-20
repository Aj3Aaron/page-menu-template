import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import '../styles/redes-sociales.css';

library.add(fab);

function RedesSociales() {
   return (
      <section id='redes-sociales' className='redes'>
         <h1 className='h1-redes'>Síguenos</h1>
         <div className="div-redes-sociales">
            <a target="_blank" rel="noopener noreferrer"  className='a-icon a-instagram'>
                <FontAwesomeIcon className='instagram' icon={faInstagram} />
            </a>
            <a target="_blank" rel="noopener noreferrer"  className='a-icon a-facebook'>
                <FontAwesomeIcon className='facebook' icon={faFacebook} />
            </a>
         </div>
      </section>
   );
}

export default RedesSociales;