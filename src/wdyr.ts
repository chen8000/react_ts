/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-16 17:47:57
 * @LastEditTime: 2021-03-25 19:37:17
 * @LastEditors: zhanghui.chen
 */
import React from "react";
if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  // const ReactRedux = require("react-redux");
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}
