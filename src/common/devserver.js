/*
    webpack 热更新
    author: svon.me@gmail.com
*/

const rc = require('./rc')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function main(config) {
    if (!config.devserver) {
        return {}
    }
    var devServer = {
        clientLogLevel: 'warning',
        hot: true,
        contentBase: false, // since we use CopyWebpackPlugin.
        compress: true,
        inline: true,
        hot: true, //实时刷新
        publicPath: '/',
        historyApiFallback : false,
        hotOnly: true,
        progress: true,
        host: '0.0.0.0',
        port: 8080
    }

    var plugins = [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
          inject: true,
          template: path.join(config.src, 'index.html'),
          filename: path.join(config.output, 'index.html'),
          chunksSortMode: 'dependency', // manual dependency
          title: '@svon/cli',
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
          },
        }),
    ]
    return {
        devServer: devServer,
        plugins: plugins,
    }
}

module.exports = function(env){
    return new Promise(function(resolve){
        rc(env).then(main).then(function(data){
            resolve(data)
        })
    })
}
