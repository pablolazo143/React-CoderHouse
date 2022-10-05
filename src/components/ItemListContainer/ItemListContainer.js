import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncMOck';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({conoceProductos})=>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const params = useParams();

    useEffect(()=>{
        getProducts(params.categoryId).then(res =>{
            setProducts(res);
        }).finally(()=>{
            setLoading(false)
        });
    },[params.categoryId]);
    console.log(products);

    if(loading){
        return(
            <h2 className='cargando--producto'>Cargando los productos</h2>
        );
    }

    return(
        <div className='ItemListContainer'>
            <h2 className='ItemListContainer--h2'>{conoceProductos}</h2>
            <div className='contenedor--productos'>
                <ItemList productos={products} />
            </div>
        </div> 
    )
};

export default ItemListContainer;