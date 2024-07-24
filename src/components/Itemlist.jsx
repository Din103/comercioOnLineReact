import { toCapital } from "../helpers/toCapital"
import ItemIndividual from "./ItemIndividual"


export const Itemlist = ({productos, titulo}) => {
  
  return (
    <div className="container">
      <h2 className="main-title">{toCapital(titulo)}</h2>
      <div className="productos">
            { productos.map((prod) => <ItemIndividual producto={prod} key={prod.id} />) }
        </div>
    </div>
  )
}
