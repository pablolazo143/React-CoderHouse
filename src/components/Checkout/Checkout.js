import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { addDoc, collection, doc, updateDoc, where, query, documentId, writeBatch, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { NotificacionContext } from '../../Notification/Notificaciones';
import './Checkout.css';
import { Link } from 'react-router-dom';

const Checkout = ()=>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState();
    const [order, setOrder] = useState({});
    const { setNotificacion } = useContext(NotificacionContext);
    const { cart, totalPagar, clearCart } = useContext(CartContext);

    const length = cart.length;

    const handleOnChangeName = (e)=>{
        console.log(e.target.value);
        setName(e.target.value);
    };
    const handleOnChangeEmail = (e)=>{
        console.log(e.target.value);
        setEmail(e.target.value);
    };
    const handleOnChangeTel = (e)=>{
        console.log(e.target.value);
        setTel(e.target.value);
    };

    useEffect(()=>{
        const orderToSubmit = {
            buyer: 
                {name: name,
                email: email,
                telefono: tel},
            items: cart,
            total: totalPagar       
        };
        setOrder(orderToSubmit);
    },[name, email, tel]);

    

    const crearOrden = async ()=>{
        /* const collectionRef = collection(db, 'pedidos');
        addDoc(collectionRef, order);
        setNotificacion('Su pedido fue generado con éxito', 'true');
        console.log(order);
        clearCart(); */

        const ids = cart.map(prod => prod.id);
        
        const prodReference = collection(db, 'products');

        const productosAgregadosUsuario = await getDocs(query(prodReference, where(documentId(), 'in', ids)));
        
        const { docs } = productosAgregadosUsuario;

        const batch = writeBatch(db);
        
        const sinStock = [];

        docs.forEach(doc => {
            const dataDoc = doc.data();
            const stockBaseD = dataDoc.stock;
            const productoCarrito = cart.find(prod => prod.id === doc.id);
            const cantidadProducto = productoCarrito?.cantidad;

            if(stockBaseD >= cantidadProducto) {
                batch.update(doc.ref, { stock: stockBaseD - cantidadProducto });
            } else {
                sinStock.push({ id: doc.id, ...dataDoc});
            };
        });

        if(sinStock.length === 0) {
            await batch.commit()

            const collectionRef = collection(db, 'pedidos');
            await addDoc(collectionRef, order);
            setNotificacion('Su pedido fue generado con éxito', 'true');
            console.log(order);
            clearCart();
        } else {
            setNotificacion('HAy productos fuera de stock en su orden', 'error');
        }

    };
   
    console.log(cart.length);
    return(
        <div>
            <h2>Ingrese sus datos</h2>
            <form style={{display: 'flex', flexDirection: 'column', width: '70%', margin: '0 auto'}}>
                <div style={{margin: '10px', display:'block', textAlign: 'left'}}>
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" onChange={(e)=>{handleOnChangeName(e)}}/>
                </div>
                <div style={{margin: '10px', display:'block', textAlign: 'left'}}>
                    <label for="mail">Correo electrónico:</label>
                    <input type="email" id="mail" onChange={(e)=>{handleOnChangeEmail(e)}}/>
                </div>
                <div style={{margin: '10px', display:'block', textAlign: 'left'}}>
                    <label for="tel">Teléfono:</label>
                    <input type="text" id="tel" onChange={(e)=>{handleOnChangeTel(e)}} /> 
                </div>
                {
                    
                    length === 0 ?
                        <Link to = '/' className='btn--finalizarCompra'>INICIO</Link>
                        : <a href='#' onClick={crearOrden} className='btn--finalizarCompra'>Generar Link de Pago</a>     
                }
                {/* <a href='#' onClick={crearOrden}>Crear Orden</a> */}
            </form>
        </div>

    );
};

export default Checkout;