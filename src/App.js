
import './App.css'
import { Navbar } from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>     
    <BrowserRouter>      
      <Navbar/>      
      <ItemListContainer/>    
    </BrowserRouter>
    
    </>
  )
}

export default App
