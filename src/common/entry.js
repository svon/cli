/*
    webpack 入口文件
    author: svon.me@gmail.com
*/

const rc = require('./rc')

function main(env) {
    return new Promise(function(resolve){
        rc(env).then(function(config) {
            let entry = config.entry
            return require(entry)
        }).then(function(data){
            resolve({
                entry: data
            })
        })
    })
}


module.exports = main
