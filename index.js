/*
    webpack
    author: svon.me@gmail.com
*/

const rc = require('./src/rc')
const vueConfig = require('./src/vue/index')

function main(tmp, env) {
    return new Promise(function(resolve){
        rc(env).then(function(option){
            return vueConfig(option)
        }).then(function(data){
            resolve(data)
        })
    })
}

module.exports = main
