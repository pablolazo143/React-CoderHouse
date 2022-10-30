import { useState, useEffect } from 'react';
import { getProduct } from '../../asyncMOck';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';

import './ItemDetailContainer.css';

const ItemDetailContainer = ()=>{

    const [oneProduct, setOneProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const paramsID  = useParams();
    console.log(paramsID);

    useEffect(()=>{
        // Usando firestore
        const docReference = doc(db, 'products', paramsID.productId);
        
        getDoc(docReference).then(doc=>{

            const data = doc.data();
            const productObject = {id: doc.id, ...data};
            console.log(productObject);
            setOneProduct(productObject);

        })
        .finally(()=>{
            setLoading(false);
        });

        // Usando el asynMock
        /* getProduct(params.productId).then(res=>{
            setOneProduct(res);
        }).finally(()=>{
            setLoading(false)
        }); */

    },[paramsID.productId]);

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