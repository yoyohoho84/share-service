import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";

// import reportWebVitals from "./reportWebVitals";
import {createGlobalStyle} from "styled-components";
import Gilroyttf from "./assets/fonts/10177.ttf";
import Gilroywoff from "./assets/fonts/10177.woff";
import GlobalFonts from "./fonts/fonts";
import img from "./img/Pattern.png";
import store from "./redux/store";

const Global = createGlobalStyle`
@font-face {
  font-family: "Gilroy";
  src: url(${Gilroyttf}) format("ttf");
  src: url(${Gilroywoff}) format("woff");
  font-weight: 400;
  font-style: normal;
}
*{
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}
input{
  outline: none;
}
html,body,#root{
  height:100%;
  font-family: "Gilroy";
  color: white;
}
body{
  background:  url(${img}) no-repeat;
  background-size: 100%;
  background-color: #1E252B;
}
`;

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <GlobalFonts />
    <Global />
    {app}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
