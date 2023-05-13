import React from "react";
import Comp1 from "../Comp1/Comp1";
import Comp2 from "../Comp2/Comp2";
import Comp3 from "../Comp3/Comp3";
import Comp4 from "../Comp4/Comp4";
import Comp5 from "../Comp5/Comp5";
import "./home.css";

function Home() {
  return (
    <div class="myContainer">
      <div class="content">
        <ul class="flex-container">
          <Comp1 />
          <Comp2 />
          <Comp3 />
          <Comp4 />
          <div>
            <Comp5 />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Home;