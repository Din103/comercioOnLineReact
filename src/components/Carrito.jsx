import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function Carrito() {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const handleVaciar =()=>{
        vaciarCarrito();
    }

  return (
    <div className="container">
        <h1 className="main-title">Carrito</h1>
        {
            carrito.map((prod)=>(
                <div key={prod.id}>
                <h3>{prod.titulo}</h3>
                <p>Precio unit: ${prod.precio}</p>
                <p>Precio total: ${prod.precio * prod.cantidad}</p>
                <p>Cantidad: {prod.cantidad}</p>
                <hr />
                <br />
                </div>
            ))
        }
        {carrito.length>0 ?
        <>
            <h2>Precio total: ${precioTotal()} </h2> 
        <button onClick={handleVaciar}>Vaciar</button> 
        </>
        :
        <div>
        <br />
        <h2>El carrito está vacio :(</h2>
        </div>      
        }
        
        
    </div>
  )
}
