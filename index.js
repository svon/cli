/*
    webpack
    author: svon.me@gmail.com
*/

const config = require('./src/common/webpack')

function main(tmp, env) {
    return config(env)
}

module.exports = main
