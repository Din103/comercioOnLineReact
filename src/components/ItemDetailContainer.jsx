import { useState, useEffect } from "react";
import { pedirItemPorId } from "../helpers/pedirDatos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";


export default function ItemDetailContainer() {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
      const docRef = doc(db,"productos",id);

      getDoc(docRef)
        .then((resp)=> {
          setItem({
            ...resp.data(), id: resp.id
          });
        })

    // pedirItemPorId(Number(id))
    // .then(res =>{
    //     setItem(res);
    // })    
}, [id])

  return (
    <div>
       {item && <ItemDetail item={item}/>} 
    </div>
  )
}
