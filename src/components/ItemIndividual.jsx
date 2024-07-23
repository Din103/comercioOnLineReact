import { Link } from 'react-router-dom';

const ItemIndividual = ( {producto} ) => {
    return (
      <div className="producto">
          <img src={producto.imagen} alt={producto.titulo} />
          <div>
              <h4>{producto.titulo}</h4>
              <p>Precio: ${producto.precio}</p>
              <p>Categoría: {producto.categoria}</p>
              <Link to={producto.titulo}  className="ver-mas"> <p className="ver-mas">Ver más</p></Link>
          </div>
      </div>
    )
  }
  
  export default ItemIndividual