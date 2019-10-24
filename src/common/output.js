/*
    webpack 输出
    author: svon.me@gmail.com
*/

function main(env) {
    let output = {
        filename: '[name].js',
        path: env.output,
        libraryTarget: 'umd',
        publicPath: '/',
        chunkFilename: '[name].[hash].chunk.js'
    }
    return Promise.resolve({
            output: output
    })
}

module.exports = main
