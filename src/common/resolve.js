
const path = require('path')
const rc = require('./rc')

function main(env) {
    return new Promise(function(resolve){
        rc(env).then(function(config) {
           return {
               extensions: ['.js', '.json', '.vue', '.jsx'],
               alias: {
                   '@': path.normalize(config.src)
               }
           }
        }).then(function(data){
            resolve({
                resolve: data
            })
        })
    })
}

module.exports = main
