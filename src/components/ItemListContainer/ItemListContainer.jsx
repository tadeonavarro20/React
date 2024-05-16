import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import getProducts from "../../data/data";
import { useParams } from "react-router-dom";

import "./itemlistcontainer.css";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams()

  useEffect(() => {
    getProducts()
      .then((respuesta) => {
        if(idCategory){
          
          const productsFilter = respuesta.filter( (productRes)=> productRes.category === idCategory )
          setProducts(productsFilter)
        }else{
          
          setProducts(respuesta);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
      });
  }, [idCategory]);

  return (
    <div>
      <h2>{saludo}</h2>
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;