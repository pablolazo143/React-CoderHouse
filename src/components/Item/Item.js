import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({product})=>{

    let stock = '';
    if(product.stock >= 5){
        stock = 'Stock Disponible';
    }else if(product.stock == 0){
        stock = 'Sin Stock' ;
    }else if(product.stock > 0 && product.stock < 5){
        stock = 'Ultimas unidades' ;
    }

    return(
        <div className='contenido--producto'>
            <h3 className='nombre--producto'>{product.name}</h3>
            <div className='contenedor--imagen--producto'>
                <img src={product.image} alt={product.alt} className='imagen--producto'></img>
            </div>
            <h3 className='stock--producto'>{stock}</h3>
            <Link to={`/detail/${product.id}`} className='detalle--producto btn'>Ver Detalles</Link>
        </div>
    );
};

export default Item;