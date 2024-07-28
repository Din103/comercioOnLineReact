import { pedirDatos } from "../helpers/pedirDatos"
import { useEffect,useState } from "react"
import { Itemlist } from "./Itemlist";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config"


export default function ItemListContainer() {
    const [productos, setproductos] = useState([]);
    const [titulo, setTitulo] = useState('Productos')
    const categoria = useParams().categoria;
   
    useEffect(() => {
      const productosRef = collection(db, "productos");
      const q = categoria ? query(productosRef, where("categoria","==", categoria)) : productosRef;

      getDocs(q)
      .then((resp)=>{
        setproductos(resp.docs.map((doc)=> {
          return {...doc.data(), id:doc.id}
          })
        );
      })
      // pedirDatos()
      // .then((res)=>{
      //   if (categoria){
      //     setproductos(res.filter((prod)=> prod.categoria === categoria));
      //     setTitulo(categoria);
      //   }else {
      //     setproductos(res);
      //     setTitulo('Productos');
      //   }        
      // })
    }, [categoria])
  return (
    <div>
        <Itemlist productos={productos} titulo={titulo}/>
    </div>
  )
}
