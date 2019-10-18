/*
    webpack 输出
    author: svon.me@gmail.com
*/

const rc = require('./rc')

function main(env) {
    return new Promise(function(resolve){
        rc(env).then(function(config){
            let output = {
                filename: '[name].js',
                path: config.output,
                publicPath: '/'
            }
            return output
        }).then(function(data){
            resolve({
                output: data
            })
        })
    })
}

module.exports = main
