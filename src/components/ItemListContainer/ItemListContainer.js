import './ItemListContainer.css';

const ItemListContainer = ({conoceProductos})=>{
    return(
        <div className='ItemListContainer'>
            <h2 className='ItemListContainer--h2'>{conoceProductos}</h2>
        </div> 
    )
};

export default ItemListContainer;