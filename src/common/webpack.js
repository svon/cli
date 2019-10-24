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
const merge = require('webpack-merge')

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
