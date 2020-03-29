/*
 * @Author: Li
 * @Descripttion:
 * @Date: 2020-03-29 12:29:45
 * @LastEditors: Li
 * @LastEditTime: 2020-03-29 12:30:02
 * @FilePath: /myapp/config-overrides.js
 */
const { override, fixBabelImports } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  })
);
