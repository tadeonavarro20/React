import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";





const ItemDetail = ( {product} ) => {

  const { carrito, agregarAlCarrito } = useContext(CartContext);
  

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
      cantidad < product.stock && setCantidad(cantidad + 1)
  }

  return (
    <div className="itemCont">
      <div className="imageCont">
        <img className="productImage" src={product.image} />
      </div>
      <div>
        <p className="productTitle">{product.title}</p>
        <p className="productPrice">Precio: ${product.price}</p>
      </div>
    </div>
  );
};
export default ItemDetail;