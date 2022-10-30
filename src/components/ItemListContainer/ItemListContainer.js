import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncMOck';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemListContainer = ({conoceProductos})=>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const params = useParams()
    console.log(params);

    // Usando firestore
    useEffect(()=>{
        const collectionReference = params.categoryId 
        ? query(collection(db, 'products'), where('category', '==', params.categoryId))
        : collection(db, 'products');
    
        getDocs(collectionReference).then(resp=>{
                const productsArray = resp.docs.map(doc => {
                const data = doc.data();
                return {id: doc.id, ...data};
            });
            console.log(productsArray);
            setProducts(productsArray);

        })
        .finally(()=>{
            setLoading(false);
        })
    },[params.categoryId]);
    

    // Usando asyncMock
    /* useEffect(()=>{
        getProducts(params.categoryId).then(res =>{
            setProducts(res);
        }).finally(()=>{
            setLoading(false)
        });
    },[params.categoryId]);
    console.log(products); */

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