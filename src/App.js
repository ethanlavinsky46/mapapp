import React from "react";
import Map from "./Map2";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.express));
  // }, []);

  return (
    <div class="map">
      {/* <p>{!data ? "Loadng..." : data}</p> */}
      <Map />
    </div>
  );
}

export default App;
