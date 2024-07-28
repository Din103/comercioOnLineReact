
import './App.css'
import { Navbar } from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import { Nosotros } from './components/Nosotros';
import {Contacto} from './components/Contacto';
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';

function App() {  
   return (
    <>
    <CartProvider>
    <BrowserRouter>      
      <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={ <ItemDetailContainer/>} />
          <Route path='/productos' element={<ItemListContainer/>} />
          <Route path='/productos/:categoria' element={<ItemListContainer/>} />
          <Route path='/nosotros' element={<Nosotros/>} />
          <Route path='/contacto' element={<Contacto/>} />
          <Route path='/carrito' element={<Carrito/>} />
          <Route path='/checkout' element={<Checkout/>} />          
         
        </Routes>     
    </BrowserRouter>
    </CartProvider>         
    </>
  )
}

export default App
