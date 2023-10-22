import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        Restaurant
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

          <li className="nav-item dropdown active">
            <Link
              className="nav-link dropdown-toggle"
              to="/menu"
              id="navbarDropdown"
              style={{ color: "white" }}
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Menu
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/menu">
                Action
              </Link>
              <Link className="dropdown-item" to="/menu">
                Another action
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/menu">
                Something else here
              </Link>
            </div>
          </li>

          <li className="nav-item active">
            <Link className="nav-link" style={{ color: "white" }} to="/faqs">
              FAQ
            </Link>
          </li>

          <li className="nav-item active">
            <Link className="nav-link" style={{ color: "white" }} to="/contactus">
              Contact Us
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" style={{ color: "white" }} to="/adminportal">
              Admin Portal
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-warning" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
