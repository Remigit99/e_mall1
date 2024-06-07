import {Link} from "react-router-dom"

import { IoBagOutline } from "react-icons/io5";
// import { FiShoppingCart } from "react-icons/fi";
// <FiShoppingCart />
// import { useGetProductsQuery } from "../../app/services/productsApi";

import { useSelector } from "react-redux";

const Navbar = () => {
  // const { data } = useGetProductsQuery();

  const {cartTotalQuantity} = useSelector(state => state.cart)


  return (
    <nav>
      <div className="container nav__container">
        <div className="nav__container-left">
          <Link to="/" className="logo">
            <h2>E-Mall1</h2>
          </Link>
        </div>
        <div className="nav__container-right">
          <Link to="cart" className="nav__cart">
            <IoBagOutline />
            <p className="items-count">{cartTotalQuantity ? cartTotalQuantity : 0}</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
