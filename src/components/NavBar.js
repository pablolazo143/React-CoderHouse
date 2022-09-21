import CartWidget from './CartWidget/CartWidget';
import './NavBar.css';
const NavBar = ()=>{
    return(
        <header className='header'>
            <nav  className='header--nav'>
                <div>
                    <a href={'index.html'} className='nav--enlace'>The Whiskería</a>
                </div>
                <div className='nav'>
                    <button className='nav--boton'>Inicio</button>
                    <button className='nav--boton'>Whisky</button>
                    <button className='nav--boton'>Promoción</button>
                    <button className='nav--boton'>Contacto</button>
                </div>
                <CartWidget />  
            </nav>
        </header>     
    );
};

export default NavBar;
