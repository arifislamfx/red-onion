import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner.js";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <div className="food-menu">
        <div className="nav-center">
          <ul>
            <li>
              <a href="/"> Breakfast </a>{" "}
            </li>
            <li className="lunch-btn">
              <a href="/"> Lunch </a>{" "}
            </li>
            <li>
              <a href="/"> Dinner </a>{" "}
            </li>
          </ul>
        </div>
        <img
          src="https://media-exp1.licdn.com/dms/image/C5622AQFSrLQ3dqJrQQ/feedshare-shrink_800/0?e=1596672000&v=beta&t=rcka6Eb2S4CQfMBb5k5EzPq3QdCB4vQbDyed1Zh9u-w"
          width="300px"
          height="300px"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

export default Home;
