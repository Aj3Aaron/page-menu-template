
import '../styles/header.css';

function Header(){
    return(
       <header className="header">
            <div className='div-header'>
                <h1 className='h1-nombre titulos-header'>Pifano's Fast Food</h1>
                {/* <h3 className='h3-nombre titulos-header'>Hamburguesas, Perros Calientes, Salchipapas, Pepitos, Parrillas y mucho más!!!</h3> */}
                <li className='ul-header'>
                    <ul className='presentacion'>🍔 Hamburguesas</ul>
                    <ul className='presentacion'>🌭 Perros Calientes</ul>
                    <ul className='presentacion'>🍟Salchipapas</ul>
                    <ul className='presentacion'>🌭 Pepitos</ul>
                    <ul className='presentacion'>🍖 Parrillas</ul>
                </li>
            </div>
       </header>
    )
}

export default Header;