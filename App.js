import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/Header";
import BodyComponent from "./Components/Body";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
