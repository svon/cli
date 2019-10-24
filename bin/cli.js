#!/usr/bin/env node

const webpack = require('webpack')
const config = require('@svon/cli/index')


function getArgv () {
    var argv = [].concat(process.argv).slice(2)
    for (var i = 0; i < argv.length; i++) {
        var item = argv[i]
        // argv[i] = item.replace(/^-+/, '')
        argv[i] = item
    }
    var data = {}
    for (var i = 0; i < argv.length; i++) {
        var key = String(argv[i]).replace(/^-+/, '')
        if (key === 'config' || key === 'w') {
            i += 1
            continue
        }
        var value = String(argv[i + 1] || '')
        if (!value || /^-/.test(value)) {
            data[key] = true
            continue
        } else if (value === 'true') {
            data[key] = true
        } else if (value === 'false') {
            data[key] = false
        } else {
            value = value.split(',')
            // 排除空数据
            value = value.reduce(function(arr, v) {
                if (v) {
                    arr.push(v)
                }
                return arr
            }, [])
            data[key] = value.length > 1 ? value : (value[0] || true)
        }
        i += 1
    }
    return data
}

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
    let argv = getArgv()
    let env = {
        rc: Object.assign({
            lang: 'es'
        }, argv)
    }
    config(null, env).then(function(data){
        const compiler = webpack(data)
        if(data.watch) {
            compiler.watch(data.watchOptions, WebpackOutputLog)
        } else {
            compiler.run(WebpackOutputLog)
        }
    })
}

main()
