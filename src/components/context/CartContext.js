import { createContext, useState } from "react";


export const CartContext = createContext({
    cart: []
}) 

export const CardProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error("El producto ya fue agregado")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.idProducto !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.idProducto === itemId)
    }
    const quantityItems = (idProducto) => {
        let items = cart.filter(prod => prod.idProducto === idProducto)
        if(items.length){
            return items[0].quantity
            } else {
                return 0
            }
    }
    const actualizarCarrito = (cantidad, idProducto) => {
        const cart2 = cart.map( e => e.idProducto == idProducto ? {...e, quantity: e.quantity+cantidad} : e)
        cart.length=0
        cart.push(...cart2)
    }

    const calcularTotal = () => {
        const total = cart.reduce((prev, next) => {
            return prev + (next.precioProducto*next.quantity)
        }, 0)
        return total
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, quantityItems, actualizarCarrito, calcularTotal}}>
            {children}
        </CartContext.Provider>
    )
}