import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductosByID } from "../connect";
import Error from "../Error/Error"

const ItemDetailContainer = ()=> {
    const params = useParams()
    console.log(params)

        useEffect(() => {
            getProductosByID(params.itemId)
            .then(res => setProducto(res))
            .catch(err => console.log(err))   
        }, [])
    const [producto, setProducto] = useState(params.itemId)
    let resultado

    if(producto){
        // SI categoria existe ETNONCES resultado es igual al filtro de ese catálogo por la categoría y SINO resutlado es igual a todo el catálogo
        producto ? resultado = producto : resultado = null
        
        // SI resultado contiene elementos ENTONCES resultado es igual a un map de todos los items y SINO resultado es igual al componente error
        resultado ? resultado = <ItemDetail key={resultado.id} {...resultado}/> : resultado=<Error />
        }
        else {
            resultado="Cargando..."
        }
    console.log(producto)
    return (
        <div className="container">
        <div className="columns">
        {/* Mostramos el rendering condicional a través de resultado */}
         {resultado}
        </div></div>
    )
}

export default ItemDetailContainer