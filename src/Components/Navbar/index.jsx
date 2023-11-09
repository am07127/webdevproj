import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import image1 from
import ShoppingCart from "../shoppingcart";
import { useSelector } from "react-redux";
import foodContext from "../../foodcontext/foodContext";

const Navbar = () => {
  const cartItems = useSelector((state) => state.items);
  const [isOpen, setIsOpen] = useState(false);

  const context = useContext(foodContext);
  const { setFood } = context;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const style = {
    button1: {
      // width : '10%',
      // backgroundColor: 'black',
      // position: 'relative',
      // left: '250px'
    },
    cart: {
      // width: '190%',
      // // color: 'whilte',
      // backgroundColor: 'white',
      // position: 'relative',
      // right: '10px'
      width: "10%",
      position: "relative",
      left: "130px",
      top: "10px",
    },
    total: {
      color: "white",
      position: "relative",
      left: "126px",
      top: "20px",
    },
  };
  const [cartVisible, setcartVisible] = useState(false);

  const handlechicken = () => {
    console.log("chicken");
    setFood(1);
  };

  const handlebbq = () => {
    console.log("bbq");
    setFood(2);
  };

  const handleCartButtonClick = () => {
    console.log("Cart button clicked");
    //visiblity(); // Ensure this is called when the button is clicked
    setcartVisible(!cartVisible);
    let total = cartItems.reduce((acc, element) => {
      return acc + element.quantity;
      console.table(acc, element);
    }, 0);
    console.log("total:", total);
    console.log("cartVisible after click:", cartVisible); // Log the state after the click
  };
  console.log("cartVisible:", cartVisible);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "black" }}
    >
      <Link classNName="navbar-brand" to="/">
        <img src="dosa-master.svg" width="50" height="50" alt=""></img>
      </Link>
      <Link
        className="navbar-brand"
        to="/"
        style={{ color: "white", paddingLeft: "20px", paddingRight: "20px" }}
      >
        Cluck'n Grill
      </Link>
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/" style={{ color: "white" }}>
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" onClick={toggleMenu} to='/menu' style={{color:"white"}}>
              Menu
            </Link>

            <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
              <button
                className="dropdown-item"
                onClick={()=>handlechicken()}
              >
                Chicken
              </button>

              <button className="dropdown-item" onClick={()=>handlebbq()}>
                Barbecue
              </button>
            </div>
          </li>

          <li className="nav-item active">
            <Link className="nav-link" style={{ color: "white" }} to="/faqs">
              FAQ
            </Link>
          </li>

          <li className="nav-item active">
            <Link
              className="nav-link"
              style={{ color: "white" }}
              to="/contactus"
            >
              Contact Us
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              className="nav-link"
              style={{ color: "white" }}
              to="/adminportal"
            >
              Admin Portal
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          {/* <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          /> */}
          <ul>
            <li className="nav-item active">
              <Link
                to="#"
                className="btn btn-link"
                // onClick={handleCartButtonClick}
                onClick={() => {
                  handleCartButtonClick();
                  console.log(1);
                }}
              >
                <img
                  className="cartImage"
                  style={style.cart}
                  src="https://t4.ftcdn.net/jpg/01/86/94/37/360_F_186943704_QJkLZaGKmymZuZLPLJrHDMUNpAwuHPjY.jpg"
                  alt="Cart"
                />
                <span style={style.total}>{cartItems.length}</span>
              </Link>
            </li>
          </ul>

          {/* <li className="nav-item active">
            <link className="nav-link" style={{ color: "white" }} to="/shoppingcart">
              <img src="/cart2-removebg-preview.png"/>
            </link>
          </li> */}
        </form>
      </div>
      {cartVisible && (
        <div
          style={{ position: "absolute", top: "10vh", right: 0, zIndex: 10 }}
        >
          <ShoppingCart />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
