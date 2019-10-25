# cli

快速搭建 vue, sass, es6/7 的脚手架

## install

```
yarn add -D webpack webpack-cli @svon/cli
```

## 修改项目 package.json 文件

```
// 脚手架配置
"clirc": {
    // 以项目为跟目录进行配置
    "src": "./src",  // 填下项目源代码目录
    "output": "",   // 代码编译后产出目录
    "watch": true,  // 是否开启监听服务
    "lang": "es", // 可选 es / ts      js 语法分类  默认 es
    "mode": "development", // production / development  默认 development
    "entry": "webpackentry.js",  // 入口文件配置 （基于 webpack entry 配置方式进行配置）
},
// css 配置
"browserslist": [
  "> 1%",
  "last 2 versions",
  "last 10 Chrome versions",
  "last 5 Firefox versions",
  "Safari >= 6",
  "ie > 8"
],
"postcss": {
  "plugins": {
    "postcss-preset-env": {},
    "autoprefixer": {}
  }
},
```

##### cli 模式

```
"scripts": {
    "test": "svoncli"
}
```

##### webpackentry.js

```
const entry = {
    "main": "src/main.js"
}
module.exports = entry
```

##### 使用
```
npm run dev
```

####  自定义配置形式

```
"scripts": {
     "dev": "webpack --config webpack.config.js"
},
"clirc": {
    // 以项目为跟目录进行配置
    "src": "./src",  // 填下项目源代码目录
    "output": "",   // 代码编译后产出目录
    "watch": true,  // 是否开启监听服务
    "entry": "webpackentry.js"  // 入口文件配置 （基于 webpack entry 配置方式进行配置）
}
```
##### webpack.config.js

```js
const cli = require('@svon/cli')

function main() {
    const config = {
         "rc": {
               // 格式与 package.json 下的 clirc 完全相同，这里的优先级大于 package.json
         }
    }
    return cli(config)
}

module.exports = main
```

#####  使用
```
npm run dev
```
