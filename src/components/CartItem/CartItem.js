import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ id, precioProducto, title, quantity, pictureUrl }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="column is-one-third">
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={pictureUrl} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <h2 className="title is-5">{title}</h2>
          <p>Precio: ${precioProducto}</p>
          <p>Cantidad: {quantity}</p>
          <button
            onClick={() => removeItem(id)}
            className="button is-danger is-light"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;