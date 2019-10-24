/*
    html 模版处理
*/

const path = require('path')
const isExists = require('../isexists')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function htmlTemplate(env, name){
    let html
    if (path.isAbsolute(name)) {
        html = path.normalize(name)
    } else {
        html = path.join(env.src, name)
    }
    let html = path.join(env.src, name)
    let htmlTemplate = {
        inject: true,
        template: html,
        filename: path.join(env.output, name),
        chunksSortMode: 'dependency',
    }
    return new Promise(function(resolve){
        isExists(html).then(function(){
            return [
                new HtmlWebpackPlugin(htmlTemplate)
            ]
        }).catch(function(){
            return []
        }).then(function(result){
            resolve(result)
        })
    })
}

function main(env) {
    return new Promise(function(resolve){
        let template = [].concat(env.template || [])
        let promises = []
        for(let i = 0, size = template.length; i < size; i++ ){
            if (template[i]) {
                promises.push(htmlTemplate(env, template[i]))
            }
        }
        Promise.all(promises).then(function(result){
            let plugins = []
            for(let i = 0, size = result.length; i < size; i++) {
                plugins = [].concat(plugins, result[i])
            }
            resolve({
                plugins: plugins
            })
        })
    })
}

module.exports = main
