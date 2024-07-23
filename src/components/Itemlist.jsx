import ItemIndividual from "./ItemIndividual"

export const Itemlist = ({productos}) => {
  return (
    <div className="container">
      <h2 className="main-title">Productos</h2>
      <div className="productos">
            { productos.map((prod) => <ItemIndividual producto={prod} key={prod.id} />) }
        </div>
    </div>
  )
}
