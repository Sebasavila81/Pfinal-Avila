import Item from "../Item/Item";
import { useEffect, useState } from "react";
import { getProductosAll, getProductosByID } from "../connect";
import { useParams } from "react-router-dom"
import Error from "../Error/Error";


const ItemList = ({categoria}) => {
    useEffect(() => {
        
        getProductosAll()
        .then(res => setCatalogo(res))
        .catch(err => console.log(err))
            
    }, [])

    const [catalogo, setCatalogo] = useState([])

    let resultado

    if(catalogo.length){
    // SI categoria existe ETNONCES resultado es igual al filtro de ese catálogo por la categoría y SINO resutlado es igual a todo el catálogo
    categoria ? resultado = catalogo.filter((el) => el.categoria==categoria) : resultado = catalogo
    
    // SI resultado contiene elementos ENTONCES resultado es igual a un map de todos los items y SINO resultado es igual al componente error
    resultado.length ? resultado = resultado.map((el) => <Item key={el.id} {...el}/>) : resultado=<Error />
    }
    else {
        resultado="Cargando..."
    }

    return (
        <div>
            <div className="container">
            <div className="columns">
            {/* Mostramos el rendering condicional a través de resultado */}
             {resultado}
            </div></div>
        </div> )













}

export default ItemList