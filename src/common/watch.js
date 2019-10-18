/*
    webpack 文件常驻监听
    author: svon.me@gmail.com
*/

const rc = require('./rc')

function main(env) {
    return new Promise(function(resolve){
        rc(env).then(function(config) {
            if (config.watch) {
                return {
                    watch: true,
                    watchOptions: {
                        poll: 1000,
                        aggregateTimeout: 300,
                    }
                }
            }
            return {}
        }).then(function(data){
            resolve(data)
        })
    })
}


module.exports = main
