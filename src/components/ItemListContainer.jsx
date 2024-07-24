import { pedirDatos } from "../helpers/pedirDatos"
import { useEffect,useState } from "react"
import { Itemlist } from "./Itemlist";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
    const [productos, setproductos] = useState([]);
    const [titulo, setTitulo] = useState('Productos')
    const categoria = useParams().categoria;
   
    useEffect(() => {
      pedirDatos()
      .then((res)=>{
        if (categoria){
          setproductos(res.filter((prod)=> prod.categoria === categoria));
          setTitulo(categoria);
        }else {
          setproductos(res);
          setTitulo('Productos');
        }        
      })
    }, [categoria])
  return (
    <div>
        <Itemlist productos={productos} titulo={titulo}/>
    </div>
  )
}
