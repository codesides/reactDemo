/*
 * @Author: Li
 * @Descripttion:
 * @Date: 2020-03-29 13:01:29
 * @LastEditors: Li
 * @LastEditTime: 2020-03-29 16:25:18
 * @FilePath: /myapp/src/setupProxy.js
 */
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost",
      changeOrigin: true
    })
  );
};
