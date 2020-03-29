<!--
 * @Author: codesides
 * @Descripttion:
 * @Date: 2020-03-27 16:10:58
 * @LastEditors: codesides
 * @LastEditTime: 2020-03-29 19:49:14
 * @FilePath: /myapp/README.md
 -->

## 安装 antd

```
yarn add antd
```

### 按需加载 antd

1.安装 babel-plugin-import

```
yarn add babel-plugin-import --save-dev
```

2.打开.babelrc，添加

```
{
  "plugins": [
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": "css" // `style: true` 会加载 less 文件
    }]
  ]
}
```

3.安装 react-app-rewired customize-cra

```
yarn add react-app-rewired customize-cra
```

3.1 修改 package.json

```
/* package.json */
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
}
```

3.2 然后在项目根目录创建一个 config-overrides.js 用于修改默认配置。

```
const { override, fixBabelImports } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  })
);
```

## react 解决跨域问题

https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/proxying-api-requests-in-development.md

## react-router

安装

```
npm install react-router-dom
```
