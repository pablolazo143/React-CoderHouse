import { useState, useEffect } from 'react';
import { getProduct } from '../../asyncMOck';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

const ItemDetailContainer = ()=>{

    const [oneProduct, setOneProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const params = useParams();

    useEffect(()=>{
        getProduct(params.productId).then(res=>{
            setOneProduct(res);
        }).finally(()=>{
            setLoading(false)
        });
    },[]);

    if(loading){
        return(
            <h2 className='cargando--producto'>Aguarde un momento</h2>
        );
    }

    return(
        <ItemDetail oneProduct={oneProduct}/>
    );
};

export default ItemDetailContainer;