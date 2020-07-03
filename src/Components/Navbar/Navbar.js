import React from "react";
import "./Navbar.css";
import logo from "../../images/logo2.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-fixed">
        <nav className="mainMenu blue lighten-3">
          <div class="nav-wrapper">
            <div className="container">
              <NavLink exact to="/">
                <img src={logo} alt="logo" className="brand-logo" />
              </NavLink>

              <NavLink
                exact
                to="/"
                data-target="mobile-demo"
                className="sidenav-trigger menu1"
              >
                <i className="material-icons">menu</i>
              </NavLink>

              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                  <NavLink className="home1" exact to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="about1" exact to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="cart1" exact to="/cart">
                    <i class="material-icons">shopping_cart</i>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="login1" exact to="/login">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="waves-effect red darken-1 btn white-text sign1"
                    exact
                    to="/signup"
                  >
                    Sign up
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <NavLink exact to="/" className="home1">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about" className="about1">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/cart" className="cart1">
            <i class="material-icons">shopping_cart</i>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/login" className="login1">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/signup"
            className="waves-effect red darken-1 btn white-text sign1"
          >
            Sign up
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
