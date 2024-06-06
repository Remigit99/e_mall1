import { IoBagOutline } from "react-icons/io5";
// import { FiShoppingCart } from "react-icons/fi";
// <FiShoppingCart />
const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <div className="nav__container-left">
          <div className="logo">
            <h2>E-Mall1</h2>
          </div>
        </div>
        <div className="nav__container-right">
          <div className="nav__cart">
            <IoBagOutline />
            <p className="items-count">0</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
