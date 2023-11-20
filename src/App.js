import Header from "./sections/header";
import Menu from "./sections/menu";
import Nav from './components/nav';
import RedesSociales from "./sections/redes-soicales";
import Contacto from "./sections/contacto";
import Ubicacion from "./sections/ubicacion";
import { useLocation, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <RedesSociales />
      <Menu />
      <Ubicacion />
      <Contacto />
    </>
  );
}

export default App;
