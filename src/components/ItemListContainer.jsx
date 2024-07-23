import { pedirDatos } from "../helpers/pedirDatos"
import { useEffect,useState } from "react"
import { Itemlist } from "./Itemlist";

export default function ItemListContainer() {
    const [productos, setproductos] = useState([]);
    useEffect(() => {
      pedirDatos()
      .then((res)=>{
        setproductos(res);
      })
    }, [])
  return (
    <div>
        <Itemlist productos={productos}/>
    </div>
  )
}
