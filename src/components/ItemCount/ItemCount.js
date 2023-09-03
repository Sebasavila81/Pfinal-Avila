import { useState, useContext } from "react"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from "../context/CartContext";

const ItemCount = ({idProducto, precioProducto, stockProducto, title, pictureUrl}) => {
    const { cart, actualizarCarrito, isInCart, quantityItems, addItem, clearCart, total} = useContext(CartContext)

    const [contador, setContador] = useState(0);
    const [ stockDisponible, setStockDisponible ] = useState(stockProducto-quantityItems(idProducto))

    function handleClickOnAdd() {
        if (contador != 0) {
            if (stockDisponible >= contador) {
           
                isInCart(idProducto) ? actualizarCarrito(contador, idProducto) : addItem({idProducto, precioProducto, title, pictureUrl}, contador)

                toast.success('Pedido Agregado al Carrito');
            setStockDisponible(stockDisponible-contador) 
            }
            else {
                toast.error('No hay stock suficiente');
            }
        } else {
            toast.error('El pedido debe ser mayor a 0.')
        }

    }

    function handleClickSuma() {
        if (contador < stockDisponible) {
            setContador(contador + 1);
        }
    }

    function handleClickResta() {
        if (contador > 0) {
            setContador(contador - 1);

        }
    }
 



    return (
        <div className="columns">
            <div className="column">

            </div>
            <div className="column is-flex is-justify-content-space-between">
                <button onClick={handleClickResta} className="button is-danger ">
                    <span>-</span>
                </button>
                <span>{contador}</span>
                <button onClick={handleClickSuma} className="button is-danger">
                    <span>+</span>
                </button>
                <button onClick={handleClickOnAdd} disabled={stockDisponible<contador ? true : false} className="button is-danger">
                    <span>AGREGAR AL CARRITO</span>
                </button>
            </div>
            <div className="column">


            </div>

            <ToastContainer />
        </div>

    )
}

export default ItemCount