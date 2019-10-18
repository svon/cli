#!/usr/bin/env node

const webpack = require('../webpack')
const config = require('../@svon/cli/index')


function WebpackOutputLog(error, stats) {
    if (error) {
        throw new console.error(error);
    } else {
        let log = stats.toString({
            colors: true,
            chunks: false
        })
        console.log(log)
    }
}

function main() {
    config().then(function(data){
        const compiler = webpack(data)
        if(data.watch) {
            compiler.watch(data.watchOptions, WebpackOutputLog)
        } else {
            compiler.run(WebpackOutputLog)
        }
    })
}

main()
