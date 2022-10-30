import { useState, useEffect, createContext } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);
    const [cantidadTot, setCantidadTotal] = useState(0);
    const [totalPagar, setTotalPagar] = useState(0);

    console.log(cart);

    const addItem = (productToAdd)=>{

        if(!isInCart(productToAdd.id)){

            setCart([...cart, productToAdd]);
            console.log(cart);

        }else{
            console.log('Alert ya está agregado');
        };
    };

    const isInCart = (id)=>{
        return cart.some(prod => prod.id == id);
    };

    const removeItem = (id)=>{
        const cartWithoutItem = cart.filter(prod => prod.id != id);
        setCart(cartWithoutItem);
    };

    const cantidadTotal = ()=>{
        let cantidadTot = 0;
        cart.forEach(product => {
            cantidadTot += product.cantidad;
        });
        return cantidadTot;
    };

    const totalAPagar = ()=>{
        let total = 0;
        cart.forEach(product =>{
            total += product.precio*product.cantidad;
        });
        return total;
    };

    const clearCart = ()=>{
        setCart([]);
    };

    useEffect(()=>{
        const cantidadTot = cantidadTotal();
        setCantidadTotal(cantidadTot)
    }, [cart]);

    useEffect(()=>{
        const total = totalAPagar();
        setTotalPagar(total);
    }, [cart])


    return (
        <CartContext.Provider value={{ cart, isInCart, addItem, removeItem, cantidadTot, totalPagar, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};