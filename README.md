# cli

快速搭建 javascript 脚手架, 围绕 vue & react 基于 es & ts 语法进行编译

## install

```
yarn add -D webpack webpack-cli @svon/cli
```

## 修改项目 package.json 文件

####  cli 命令 形式

```
"scripts": {
     "dev": "vuecli"
},
"clirc": {
    // 以项目为跟目录进行配置
    "src": "./src",  // 填下项目源代码目录
    "output": "",   // 代码编译后产出目录
    "watch": true,  // 是否开启监听服务
    "entry": "webpackentry.js"  // 入口文件配置 （基于 webpack entry 配置方式进行配置）
}
```
** webpackentry.js **

```
const entry = {
    "main": "src/main.js"
}
module.exports = entry
```

**  使用 **
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
** webpack.config.js **

```
const cli = require('@svon/cli')

function main() {
    const config = {
         "rc": {
               // 格式与 package.json 下的 clirc 完全相同，这里的优先级大于 package.json
         }
    }
    // 如果使用 package.json 请不要传该参数
    return cli(config)
}

module.exports = main
```

**  使用 **
```
npm run dev
```
