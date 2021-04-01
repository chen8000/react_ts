/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-23 12:21:11
 * @LastEditTime: 2021-04-01 12:20:05
 * @LastEditors: zhanghui.chen
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.less";
import "assets/style/transition.css";
import "assets/style/cover.css";
import "assets/fonts/iconfont.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
