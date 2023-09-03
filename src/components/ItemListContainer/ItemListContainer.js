import React from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {
  const params = useParams();
  const categorias = ['Proteinas', 'Creatinas', 'Quemadores']
  return (
    <div className="item-list-container">
                <section className="hero is-link">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered has-text-white">
            {params.idCategoria ? categorias[params.idCategoria-1] : greeting}
          </h1>
        </div>
      </div>
    </section>
    
      <div className="columns">
        <div className="column"></div>
        <div className="column">

        </div>
        <div className="column"></div>
      </div>

      {params.idCategoria ? (
        <ItemList categoria={params.idCategoria} params={params} />
      ) : (
        <ItemList />
      )}
    </div>
  );
};

export default ItemListContainer;