/*
    webpack config
    author: svon.me@gmail.com
*/

const path = require('path')
const entry = require('./entry')
const output = require('./output')
const resolve = require('./resolve')
const watch = require('./watch')
const rules = require('./rules')
const devserver = require('./devserver')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function config(result, env) {
    let config
    if (env.mode && env.mode === 'development') {
        config = {
            mode: 'development',
            devtool: 'cheap-module-eval-source-map',
        }
    } else {
        config = {
            mode: 'production',
            devtool: false,
        }
    }
    let htmlTemplate = {
        inject: true,
        template: path.join(env.src, 'index.html'),
        filename: path.join(env.output, 'index.html'),
        chunksSortMode: 'dependency',
    }
    console.log(htmlTemplate)
    config['plugins'] = [
        new HtmlWebpackPlugin(htmlTemplate),
    ]
    for(let i = 0, size = result.length; i < size; i++) {
        config = merge(config, result[i])
    }
    return config
}

function main(env) {
    return new Promise(function(callback){
        let list = [
            entry(env),
            output(env),
            resolve(env),
            watch(env),
            rules(env),
            devserver(env),
        ]
        Promise.all(list).then(function(result){
            return config(result, env)
        }).then(function(data){
            callback(data)
        }).catch(function(e){
            console.error(e)
        })
    })
}

module.exports = main
