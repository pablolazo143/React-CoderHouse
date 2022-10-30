import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { NotificacionContext } from '../../Notification/Notificaciones';
import './CartItem.css';

const CartItem = ({prod})=>{
    console.log(prod);
    const { removeItem } = useContext(CartContext);
    const { setNotificacion } = useContext(NotificacionContext)
    return(
        <div className="cart" >
                    <img src={prod.image} alt={prod.alt}></img>
                    <h2>Producto: {prod.name}</h2>
                    <h2>Precio unitario: {prod.precio}</h2>
                    <h2>Cantidad: {prod.cantidad}</h2>
                    <h2>Subtotal: ${prod.cantidad*prod.precio}</h2>
                    <button onClick={()=>{removeItem(prod.id); setNotificacion('Producto eliminado con éxito','error')}} className='removeItem'>🗑️ Quitar</button>
                </div>
    );

};

export default CartItem;