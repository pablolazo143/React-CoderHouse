import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../Context/CartContext';
import { NotificacionContext } from '../../Notification/Notificaciones';
import './ItemDetail.css';

const ItemDetail = ({oneProduct})=>{
    /* console.log(oneProduct); */

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { addItem, isInCart } = useContext(CartContext);

    const { setNotificacion } = useContext(NotificacionContext)


    const handleOnAdd = (cantidad)=>{
        setAgregarCantidad(cantidad);

        const productoParaAgregar = {
            id: oneProduct.id,
            name: oneProduct.name,
            precio: oneProduct.precio,
            cantidad: cantidad,
            image: oneProduct.image
        }
        addItem(productoParaAgregar);
        if(!isInCart(productoParaAgregar.id)){
            setNotificacion(`Se agregó al carrito ${productoParaAgregar.cantidad} unidades de ${productoParaAgregar.name}`, 'true');
        }else{
            setNotificacion(`Este producto ya se encuentra en su carrito`, 'error');
        }     
    }

    return(
        <div className='contenido--detailProducto'>
            <h3 className='nombre--detailProducto'>{oneProduct.name}</h3>
            
            <div className='detailProducto'>
                <div className='contenedor--imagen--detailProducto'>
                    <img src={oneProduct.image} alt={oneProduct.alt} className='imagen--detailProducto'></img>
                </div>

                <div className='descripcion-precio'>
                    <p>Descripción: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
                            making it look like readable English
                    </p>
                        <div className='precio-stock'>
                            <p>Precio $ <span>{oneProduct.precio}</span></p>
                            <p>Stock <span>{oneProduct.stock}</span> unidades</p>
                            {
                                agregarCantidad == 0 ?
                                <ItemCount stock={oneProduct.stock} onAdd={handleOnAdd}/>
                                : <Link to = '/cart' className='btn--finalizarCompra'>Finalizar compra</Link>
                            }
                            
                            {/* <button onClick={()=> console.log('Se agregó correctamente al carrito')} className='btn--agregarCarrito'>Agregar al carrito</button> */}
                        </div>
                </div>
            </div> 
        </div>
    );
};

export default ItemDetail;