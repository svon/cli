/*
* 判断文件或文件夹是否存在
* author: svon.me@mgmail.com
*/

const fs = require('fs')

function isExists(src) {
    return new Promise(function(callback, reject){
        fs.exists(src, function(state) {
              if (state) {
                  callback(src)
              } else {
                  reject()
              }
        })
    })
}


module.exports = isExists
