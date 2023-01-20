import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import UserToken from "./context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserToken>
      <App />
    </UserToken>
  </React.StrictMode>
);
