import { useState } from "react";
import './ItemCount.css';


const ItemCount = ({stock, onAdd})=>{
    console.log(stock)
    const limite = stock;
    const [count, setCount] = useState(0);
    const sumar = ()=>{
        if (count >= 0 && count < limite){
            setCount(count + 1);
        };
    };
    const restar = ()=>{
        if (count > 0){
            setCount(count - 1);
        };
    };
    return(
        <div>
            <div className="contenedor--sumar">
                <h2 onClick={restar} className='boton--sumarRestar'>-</h2>
                <p className="cuenta">{count}</p>
                <h2 onClick={sumar} className='boton--sumarRestar'>+</h2>
            </div> 
            <button onClick={()=> onAdd(count)} className='btn--agregarCarrito'>Agregar al carrito</button>
        </div>

    );
};
 
    export default ItemCount;