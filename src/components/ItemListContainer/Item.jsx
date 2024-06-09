
 import { Link } from "react-router-dom";

 const Item = ({ product }) => {
   return (
     <div className="item">
       <img className="itemImage"
         src={product.image}
       />
       <div className="itemDetails">
         <p>{product.name}</p>
         <Link to={`/detail/${product.id}`} className="buttomDetails"> Ver detalles </Link>
       </div>
     </div>
   );
 };

 export default Item