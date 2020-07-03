import React from "react";
import "./Banner.css";
import { Button } from "react-materialize";

const Banner = () => {
  return (
    <div>
      <div className="banner-area">
        <div className="middle-area">
          <div className="row">
            <div className="col s12">
              <h1>Best food waiting for your belly</h1>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <form action="" className="input-filed">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search food items"
                />
                <Button className="waves-effect red darken-1 btn white-text">
                  Search
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
