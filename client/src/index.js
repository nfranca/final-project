import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserContextProvider } from "./UserContext";

ReactDOM.render(
  <UserContextProvider>
    <App />,
  </UserContextProvider>,
  document.getElementById("root")
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
