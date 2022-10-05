import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({oneProduct})=>{
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
                            <ItemCount stock={oneProduct.stock}/>
                            <button onClick={()=> console.log('Se agregó correctamente al carrito')} className='btn--agregarCarrito'>Agregar al carrito</button>
                        </div>
                </div>
            </div> 
        </div>
    );
};

export default ItemDetail;