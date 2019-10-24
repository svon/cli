/*
    webpack dev server
    author: svon.me@gmail.com
*/
const webpack = require('webpack')

function main() {
    let plugins = [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
    let devServer = {
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
    return {
        devServer: devServer,
        plugins: plugins
    }
}

module.exports = function(env) {
    if (env.devserver) {
        return Promise.resolve(main(env))
    } else {
        return Promise.resolve({})
    }
}
