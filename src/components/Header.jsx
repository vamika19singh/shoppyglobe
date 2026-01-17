import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <header className="header">
      <h1>ShoppyGlobe</h1>

      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearch}
      />

      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>
    </header>
  );
};

export default Header;
