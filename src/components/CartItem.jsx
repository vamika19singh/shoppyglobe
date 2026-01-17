import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <h4>{item.title}</h4>
      <p>₹ {item.price}</p>

      <button
        onClick={() =>
          dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
        }
        disabled={item.quantity === 1}
      >
        -
      </button>

      <span>{item.quantity}</span>

      <button
        onClick={() =>
          dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
        }
      >
        +
      </button>

      <button onClick={() => dispatch(removeFromCart(item.id))}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
