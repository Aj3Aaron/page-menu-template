import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useLocation, BrowserRouter as Router } from 'react-router-dom';

import '../styles/nav.css'

function Nav() {

    const [linkMenuClicked, setLinkMenuClicked] = useState(false);

    useEffect(() => {
        const existeMenuEnURL = () => {
        const searchParams = new URLSearchParams(window.location.search);
        return searchParams.has('menu');
        };

        // Ejecuta el código solo al abrir la página
        if (existeMenuEnURL()) {
        const linkMenu = document.querySelector('.link-menu');
        const darkOverlay = document.querySelector('.dark-overlay');

        // Click en linkMenu
        linkMenu.click();
        setLinkMenuClicked(true);
        }
    }, []); // El array de dependencias está vacío para que se ejecute solo una vez al montar el componente

    useEffect(() => {
        if (window.innerWidth <= 800) {

            // Ejecuta el código solo después de que linkMenu ha sido clickeado
            if (linkMenuClicked) {
                const darkOverlay = document.querySelector('.dark-overlay');
                darkOverlay.click();
            }
        }else{
            document.body.style.overflow = 'auto'
            return;
        }
    }, [linkMenuClicked]);

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
       if(menuOpen == true){
            document.body.style.overflow = 'auto'
       }else{
            document.body.style.overflow = 'hidden'
       }
    };

  return (
    <>
        {/* Agrega el fondo oscuro condicionalmente */}
        <div className={`dark-overlay ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>

   
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <div className='div-nav'>
                
                <div className={`div-links ${menuOpen ? 'open' : ''}`}>
                    
                    
                    <Link 
                        activeClass="active"
                        to="menu"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='titulo_nav link-menu'
                        onClick={toggleMenu}
                    >
                        
                    <a className='icon-nav'>
                    <svg fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>book</title> <path d="M0 23.008v-17.984q0-1.024 0.48-1.888t1.28-1.44q1.024-0.672 2.24-0.672 0.736 0 1.472 0.256l10.016 4q0.064 0.032 0.512 0.32 0.448-0.288 0.512-0.32l10.016-4q0.736-0.256 1.472-0.256 1.248 0 2.24 0.672 0.832 0.576 1.312 1.44t0.448 1.888v17.984q0 1.248-0.672 2.24t-1.856 1.472l-9.984 4q-0.736 0.288-1.472 0.288-1.024 0-2.016-0.576-0.992 0.576-1.984 0.576-0.768 0-1.504-0.288l-9.984-4q-1.152-0.448-1.824-1.472t-0.704-2.24zM4 23.008l10.016 4v-17.984l-10.016-4v17.984zM6.016 21.824v-2.016l5.984 2.4v2.016zM6.016 17.824v-2.016l5.984 2.4v2.016zM6.016 13.824v-2.016l5.984 2.4v2.016zM6.016 9.824v-2.016l5.984 2.4v2.016zM18.016 27.008l9.984-4v-17.984l-9.984 4v17.984zM20 24.224v-2.016l6.016-2.4v2.016zM20 20.224v-2.016l6.016-2.4v2.016zM20 16.224v-2.016l6.016-2.4v2.016zM20 12.224v-2.016l6.016-2.4v2.016z"></path> </g></svg>
                    </a>
                    Menu
                    </Link>
                    <Link
                        activeClass="active"
                        to="redes-sociales"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='titulo_nav'
                        onClick={toggleMenu}
                    >
                    <a className='icon-nav'>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#ffffff"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#ffffff"></path> </g></svg>
                    </a>
                    Redes Sociales
                    </Link>
                    <Link
                        activeClass="active"
                        to="ubicacion"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='titulo_nav'
                        onClick={toggleMenu}
                    >
                        <a className='icon-nav'>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </a>
                    Ubicacion
                    </Link>
                    <Link
                        activeClass="active"
                        to="contacto"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='titulo_nav'
                        onClick={toggleMenu}
                    >
                    <a className='icon-nav'>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="#ffffff"></path> </g></svg>
                    </a>
                    Contacto
                    </Link>
                    
                </div>
                {/* Este es el botón de hamburguesa para dispositivos más pequeños */}
                <div className='menu-toggle'>
                    <div className="hamburger" onClick={toggleMenu}>
                        {menuOpen ? (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14" className="closeHamburguer"><path fill="currentColor" fill-rule="evenodd" d="M14 1.67L12.59.31 7 5.69 1.41.31 0 1.67l5.59 5.37L0 12.42l1.41 1.36L7 8.4l5.59 5.38L14 12.42 8.41 7.04z"></path></svg>
                            </>
                        ):(
                            <>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </>
                        )}
                    </div>
                </div>

                {/* <div className='div-shopping-cart'>
                    <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shopping-cart"><path d="M12 12.7499H5.386C5.1498 12.75 4.9212 12.6664 4.74067 12.5139C4.5602 12.3615 4.43953 12.1502 4.4 11.9173L2.642 1.58395C2.60233 1.35119 2.4816 1.13996 2.30113 0.987686C2.12067 0.835406 1.89213 0.7519 1.656 0.751953H1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.75 14.75C10.8881 14.75 11 14.6381 11 14.5C11 14.3619 10.8881 14.25 10.75 14.25" stroke="currentColor"></path><path d="M10.75 14.75C10.6119 14.75 10.5 14.6381 10.5 14.5C10.5 14.3619 10.6119 14.25 10.75 14.25" stroke="currentColor"></path><path d="M5.75 14.75C5.88807 14.75 6 14.6381 6 14.5C6 14.3619 5.88807 14.25 5.75 14.25" stroke="currentColor"></path><path d="M5.75 14.75C5.61193 14.75 5.5 14.6381 5.5 14.5C5.5 14.3619 5.61193 14.25 5.75 14.25" stroke="currentColor"></path><path d="M4.03141 9.75007H12.0787C12.5247 9.75001 12.9578 9.60094 13.3093 9.32647C13.6608 9.05207 13.9105 8.66801 14.0187 8.23541L14.9854 4.36873C15.0038 4.29499 15.0052 4.21802 14.9895 4.14366C14.9737 4.0693 14.9412 3.99952 14.8944 3.93961C14.8476 3.87971 14.7878 3.83126 14.7194 3.79795C14.6511 3.76465 14.5761 3.74736 14.5001 3.7474H3.01075" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>  
                </div> */}

                <div className='div-logo'>
                    <img className='img-nav' src={require ('../img/logo.png')} />
                </div>

            </div>
        </nav>
    </>
  );
}

export default Nav;
