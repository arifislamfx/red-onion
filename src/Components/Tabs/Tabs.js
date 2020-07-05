import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Breakfast from "../Tabs/Breakfast/Breakfast.js";
import Lunch from "../Tabs/Lunch/Lunch.js";
import Dinner from "../Tabs/Dinner/Dinner.js";

const Tabs = () => {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <NavLink exact to="/breakfast">
              Breakfast
            </NavLink>
          </li>
          <li>
            <NavLink to="/lunch">Lunch</NavLink>
          </li>
          <li>
            <NavLink exact to="/dinner">
              Dinner
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/breakfast" component={Breakfast}></Route>
          <Route path="/lunch" component={Lunch}></Route>
          <Route path="/dinner" component={Dinner}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Tabs;
