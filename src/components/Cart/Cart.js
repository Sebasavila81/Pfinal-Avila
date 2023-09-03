import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart, calcularTotal } = useContext(CartContext);

  if (!cart.length) {
    return (
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="card">
            <div className="card-content">
              <h1 className="title">No hay items en el carrito</h1>
              <Link to="/" className="button is-link">
                Volver a Productos
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="columns is-centered">
      <div className="column is-two-thirds">
        <div className="card">
          <div className="card-content">
            <div className="is-flex is-flex-wrap-wrap">
              {cart.map((p) => (
                <CartItem key={p.id} {...p} />
              ))}
            </div>
            <h3 className="title is-4">Total: ${calcularTotal()}</h3>
            <button
              onClick={() => clearCart()}
              className="button is-danger is-light"
            >
              Limpiar Carrito
            </button>
            <Link to="/checkout" className="button is-success">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
