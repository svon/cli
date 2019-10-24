/*
    vue-loader 配置
    author: svon.me@gmail.com
*/

const merge = require('webpack-merge')
const config = require('../common/webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function main(env) {
    var module= {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
    var plugins = [
        new VueLoaderPlugin()
    ]
    return new Promise(function(resolve){
        config(env).then(function(data){
            return merge(data, {
                module: module,
                plugins: plugins,
            })
        }).then(function(data){
            resolve(data)
        })
    })
}

module.exports = main
