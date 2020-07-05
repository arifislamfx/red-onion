import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js";
import Cart from "./Components/Cart/Cart.js";
import Login from "./Components/Login/Login.js";
import Signup from "./Components/Signup/Signup";
import Navbar from "./Components/Navbar/Navbar.js";
import Nomatch from "./Components/Nomatch/Nomatch";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="*" component={Nomatch}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
