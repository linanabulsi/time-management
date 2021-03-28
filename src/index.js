import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { ActivityProvider } from "./Context/context";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ActivityProvider>
        <App />
      </ActivityProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
