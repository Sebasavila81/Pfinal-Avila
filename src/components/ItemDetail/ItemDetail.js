import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({ id, title, description, price, pictureUrl, stock, estadoModal, closeModal }) => {
  
  const [quantityAdded, setQuantityAdded] = useState(0)
  
  const {addItem} = useContext(CartContext)
  
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      id:id, title:title, price:price
    }

    addItem(item, quantity)
    
  }
  const handlerCerrarModal = () => {
    closeModal()
  }

  let res = false
  if (estadoModal) {
    res = <div>
      <div className="modal is-active">
        <div className="modal-background" onClick={handlerCerrarModal}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{title}</p>
            <button className="delete" aria-label="close" onClick={handlerCerrarModal}></button>
          </header>
          <section className="modal-card-body">

            <div className='modal-content'>
              <p class="image is-4by3">
                <img src={pictureUrl} />
              </p>
              <p>{description}
              </p>
              <p>$ {price}
              </p>
            </div>

          </section>
          <footer className="modal-card-foot">
            {
              quantityAdded > 0 ? (
                <Link to='/cart' className=''>Terminar compra</Link>

              ) : (
                <ItemCount initial={1} stockProducto={stock} idProducto={id} precioProducto={price} title={title} pictureUrl={pictureUrl} onAdd={handleOnAdd}/>
              )  
            }
            
          </footer>
        </div>
      </div>
    </div>


  }
  return (
    <div>
      {res}
    </div>

  )
}

export default ItemDetail