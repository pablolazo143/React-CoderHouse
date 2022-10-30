import { Link } from 'react-router-dom';
import { useState, useEffect,useContext } from 'react';
import './CartWidget.css';
import icon from './assets/Whiskey-icon.png'
import { CartContext } from '../../Context/CartContext';

const CartWidget = ()=>{

    const [disabled, setDisabled] = useState(true);

    const { cart, cantidadTot } = useContext(CartContext);

    useEffect(()=>{
        if(cart.length>0){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    },[cart])

    return(
        <Link to = '/cart' className={`CartWidget ${disabled && 'disabled'}`} >
            <div className='CartWidget--cont-img'>
                <img src={icon} alt='logo' className='CartWidget--img' />
            </div>
            <p className='CartWidget--p'>{cantidadTot}</p>
        </Link>
    );
};

export default CartWidget;