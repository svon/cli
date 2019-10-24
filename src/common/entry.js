/*
    webpack 入口文件
    author: svon.me@gmail.com
*/


function main(env) {
    let entry = {
        entry: require(env.entry)
    }
    return Promise.resolve(entry)
}


module.exports = main
