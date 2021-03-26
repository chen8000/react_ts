/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-25 10:36:57
 * @LastEditTime: 2021-03-25 10:41:40
 * @LastEditors: zhanghui.chen
 */
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/data", {
      target: "http://10.0.3.125:8993",
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/data": "/data",
      },
    })
  );
};
