import React from "react";
import "./App.css";
import SideBar from "./Sidebar";

function App() {
  const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.express));
  // }, []);

  return (
    <div class="app">
      <SideBar />
    </div>
  );
}

export default App;
