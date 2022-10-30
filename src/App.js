import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from './Context/CartContext';
import { NotificacionProvider } from './Notification/Notificaciones'
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

// import {cargarFirebase} from './asyncMOck'

function App() {
  return (
    <div className="App">
      {/* <button onClick={cargarFirebase}>agregarFirebase</button> */}
      <NotificacionProvider>
        <CartContextProvider>
          <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer conoceProductos={'Conocé Nuestros Productos'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer conoceProductos={'Conocé Nuestros Productos'}/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer id={2}/>}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='*' element={<h1>Error 404 Not Found</h1>} />
          </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificacionProvider>
    </div>
  );
}

export default App;
