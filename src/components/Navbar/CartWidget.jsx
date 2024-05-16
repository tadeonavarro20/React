import { PiShoppingCartSimple } from "react-icons/pi";
import "./cartwidget.css";
const CartWidget = () => {
  return (
    <div className="CartWidget">
      <PiShoppingCartSimple size={30} />
      <p className="CartNumber">1</p>
    </div>
  );
};

export default CartWidget;
