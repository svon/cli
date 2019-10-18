/*
    配置环境基础信息
    author: svon.me@gmail.com
*/

const path = require('path')
const isExists = require('./isexists')
let curPath = __dirname

function projectData(src) {
    let package =  require(src) //  获取项目的 package.json 配置信息
    let cliRc = package['clirc'] || {} // 获取 cli 配置信息

    function dir(key, auto) {
        let text = cliRc[key] || auto
        // 判断 src 配置是否是绝对路劲
        if (path.isAbsolute(text)) {
            // 格式化路劲
            return path.normalize(text)
        } else {
            let root = path.dirname(src)
            // 以项目为跟目录，拼接源码路劲
            return path.join(root, text)
        }
    }
    return {
        src: dir('src', 'src'), // 获取源码目录,
        entry: dir('entry', 'build/entry'),
        output: dir('output', 'dist'),
        watch: !!cliRc.watch
    }
}

function config() {
    let root = path.join(curPath, '../..')
    return {
        src: path.join(root, 'src'),
        output: path.join(root, 'dist'),
        entry: path.join(root, 'build/entry'),
    }
}

function main(env) {
    if (env && env.rc) {
        return Promise.resolve(Object(env.rc))
    }
    if (curPath.includes('node_modules')) {
        return new Promise(function(resolve){
            let cwd = process.cwd() // 获取项目运行目录
            isExists( path.join(cwd, 'package.json')).then(function(src){
                return projectData(src)
            }).catch(function(e){
                return config()
            }).then(function(data){
                resolve(data)
            })
        })
    } else {
        return Promise.resolve(config())
    }
}

module.exports = main
