import { useState, useContext } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Item = ({ id, stock, title, price, description, pictureUrl }) => {
  const [modal, setModal] = useState(false);
  const [quantityAdded, setQuantityAdded] = useState(0)

  const {addItem} = useContext(CartContext)


  const handlerClickDetail = () => {
    setModal(!modal)
   

  }

  return (
    <div className="column is-one-third">
      <div className="card">
        <div className="card-image is-justify-content-center">
          <figure className="image is-3by2">
            <img onClick={handlerClickDetail} src={pictureUrl} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">$ {price}</p>
            </div>
          </div>

          <div className="content">
            {description}.
          </div>
        </div>
        <footer className="modal-card-foot">
            {
              quantityAdded > 0 ? (
                <Link to='/cart' className=''>Terminar compra</Link>

              ) : (
                <ItemCount initial={1} stockProducto={stock} idProducto={id} precioProducto={price} pictureUrl={pictureUrl} title={title} />
              )  
            }
            
          </footer>
      </div>
      <ItemDetail id={id} stock={stock} title={title} description={description} price={price} pictureUrl={pictureUrl} estadoModal={modal} closeModal={handlerClickDetail} />
    </div>
  )
}
export default Item