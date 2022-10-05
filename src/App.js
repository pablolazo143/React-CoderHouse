import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer conoceProductos={'Conocé Nuestros Productos'}/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer conoceProductos={'Conocé Nuestros Productos'}/>}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer id={2}/>}/>
      </Routes>
         
      </BrowserRouter>
    </div>
  );
}

export default App;
