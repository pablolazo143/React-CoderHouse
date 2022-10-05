import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css';
const NavBar = ()=>{
    return(
        <header className='header'>
            <nav  className='header--nav'>
                <div>
                    <Link to={`/`} className='nav--enlace'>The Whiskería</Link>
                </div>
                <div className='nav'>
                    <Link to={`/category/blend`} className='nav--boton'>Blends</Link>
                    <Link to={`/category/bourbon`} className='nav--boton'>Bourbon</Link>
                    <Link to={`/category/irish`} className='nav--boton'>Irish</Link>
                    <Link to={`/category/singlemalt`} className='nav--boton'>Single Malt</Link>
                    <Link to={`/category/japones`} className='nav--boton'>Japones</Link>
                </div>
                <CartWidget />  
            </nav>
        </header>     
    );
};

export default NavBar;
