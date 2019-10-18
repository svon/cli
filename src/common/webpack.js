/*
    webpack config
    author: svon.me@gmail.com
*/

const entry = require('./entry')
const output = require('./output')
const resolve = require('./resolve')
const watch = require('./watch')
const merge = require('webpack-merge')

function config(result) {
    let config = {
        mode: 'development', // production development
        devtool: 'cheap-eval-source-map',
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
            watch(env)
        ]
        Promise.all(list).then(function(result){
            return config(result)
        }).then(function(data){
            callback(data)
        }).catch(function(e){
            console.error(e)
        })
    })
}

module.exports = main
