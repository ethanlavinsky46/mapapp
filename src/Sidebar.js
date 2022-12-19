import React from "react";
import Map from "./Map3";
import "./App.css";

function SideBar() {
  const [data, setData] = React.useState(null);

  return (
    <div>
      <>
        <link href="style.css" rel="stylesheet" />
        <nav id="menu"></nav>

        <div class="map-overlay" id="features">
          <h2>Zip-Code:</h2>
          <div id="pd"></div>
        </div>
        <div id="legend"></div>

        <div className="side">
          <div className="heading">
            <h1>Nearest Test Centers</h1>
          </div>
          <div id="listings" className="listings" />
        </div>
        <div id="map" className="map">
          <Map />
        </div>
      </>
    </div>
  );
}

export default SideBar;
