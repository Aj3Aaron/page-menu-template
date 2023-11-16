import React from 'react';
import { Link, Element } from 'react-scroll';

import '../styles/nav.css'

function Nav() {
  return (
    <nav className="nav">
        <div className='div-nav'>
            <div className='div-logo'>
                <img className='img-nav' src={require ('../img/logo.png')} />
            </div>

            <div className='div-links'>

                <Link
                    activeClass="active"
                    to="menu"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className='titulo_nav'
                >
                Menu
                </Link>
                <Link
                    activeClass="active"
                    to="conocimientos"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className='titulo_nav'
                >
                Redes Sociales
                </Link>
                <Link
                    activeClass="active"
                    to="certificados"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className='titulo_nav'
                >
                Ubicacion
                </Link>
                <Link
                    activeClass="active"
                    to="certificados"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className='titulo_nav'
                >
                Contacto
                </Link>
            </div>
        </div>
    </nav>
  );
}

export default Nav;
