

import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div>
      <img
        src={product.image}
      />
      <div>
        <p>{product.name}</p>
        <Link to={`/detail/${product.id}`} className="button-item"> Ver detalles </Link>
      </div>
    </div>
  );
};

export default Item