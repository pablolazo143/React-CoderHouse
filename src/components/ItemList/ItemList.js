import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({productos})=>{
    return(
        <ul className='lista--productos'>
            {productos.map(product => <Item product={product} key={product.id} /> )}
        </ul> 
    );
};

export default ItemList;