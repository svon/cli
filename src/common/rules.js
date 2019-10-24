/*
    文件模块解析
    author: svon.me@gmail.com
*/

const style = require('./style')
const js = require('../babel/index')

let rules = [
    {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: "html-loader"
        }
      ]
    }
]

function main(env) {
    return Promise.resolve({
        module: {
            rules: [].concat(style(env), js(env), rules)
        }
    })
}

module.exports = main
