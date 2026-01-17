import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed");
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div>
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Name" required />
        <input placeholder="Address" required />
        <input placeholder="Phone" required />
        <button type="submit">Place Order</button>
      </form>

      <h3>Order Summary</h3>
      {cartItems.map(item => (
        <p key={item.id}>
          {item.title} × {item.quantity}
        </p>
      ))}
    </div>
  );
};

export default Checkout;
