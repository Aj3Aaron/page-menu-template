import Header from "./sections/header";
import Menu from "./sections/menu";
import Nav from './components/nav';
import RedesSociales from "./sections/redes-soicales";
import Contacto from "./sections/contacto";
import Ubicacion from "./sections/ubicacion";

function App() {
  return (
    <>
    <Nav />
    <Header />
    <RedesSociales />
    <Menu />
    <Contacto />
    <Ubicacion />
    
    </>
  );
}

export default App;
