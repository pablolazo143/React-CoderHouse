import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

import './Cart.css';


const Cart = ()=>{

    const [disabled, setDisabled] = useState(true);
    const {cart, totalPagar} = useContext(CartContext);

    useEffect(()=>{
        if(cart.length>0){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    },[cart])

    console.log(cart);
    return(
        <div>
            {cart.map(prod => <CartItem prod={prod} key={prod.id}/>)}
            <h2>Total a Pagar: $ {totalPagar}</h2>
            <Link to='/checkout' className={`button--pay ${disabled && 'disabled not-pay'}`}>Pagar</Link>
        </div>
    );
};

export default Cart;