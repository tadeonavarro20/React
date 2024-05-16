import "./itemDetail.css";

const ItemDetail = ({ product }) => {
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