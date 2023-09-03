import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "@creativebulma/bulma-badge/dist/bulma-badge.css"
import styles from './CartWidget.module.css';
import { CartContext } from '../context/CartContext';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CartWidget = ()=> {
    
    const { cart } = useContext(CartContext)
    const [ cantidad, setCantidad ] = useState()

    useEffect(() => {
        const totalCantidad = cart.length
        setCantidad(totalCantidad);
      }, [cart])

    return ( 
        <Link to='/cart' className={styles.badgeCont} >
        <FontAwesomeIcon icon={faCartShopping} size="lg"/>
        { <span title="Badge top right" className="badge">{cantidad}</span> }
        </Link>
    )
}
export default CartWidget