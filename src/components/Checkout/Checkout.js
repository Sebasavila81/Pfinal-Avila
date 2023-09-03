import { useContext, useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";

import { CartContext } from "../context/CartContext";
import Error from "../Error/Error";

function Checkout() {
  const { cart } = useContext(CartContext);
  const [resultado, setResultado] = useState("Cargando");

  useEffect(() => {
    const actualizarDB = async () => {
      const listaProductos = [];
        if(cart.length) {setResultado(<Error />)} 
      for (let producto of cart) {
        try {
          const productoRef = doc(db, "productos", producto.idProducto);
          const productoSnapshot = await getDoc(productoRef);

          if (productoSnapshot.exists()) {
            const productoData = productoSnapshot.data();
            listaProductos.push({
              id: producto.idProducto,
              quantity: producto.quantity,
              ...productoData,
            });
          } else {
            setResultado(<Error />);
            return;
          }
        } catch (error) {
          setResultado(<Error />);
          return;
        }
      }

      if (listaProductos.length) {
        for (let producto of listaProductos) {
          const productoRef = doc(db, "productos", producto.id);
          const nuevoStock = producto.stock - producto.quantity;
          try {
            await updateDoc(productoRef, { stock: nuevoStock });
            setResultado(<div>Su pedido se realizó de forma exitosa.</div>);
          } catch {
            setResultado(<Error />);
            return;
          }
        }
      }
    };

    actualizarDB();
  }, [cart]);

  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-two-thirds">
          <div className="card">
            <div className="card-content">
              <h1 className="title">Checkout</h1>
              <div className="content">{resultado}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;