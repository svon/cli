
const path = require('path')

function main(env) {
    let data = {
        extensions: ['.js', '.json', '.vue', '.jsx'],
        alias: {
            '@': path.normalize(env.src)
        }
    }
    return Promise.resolve({
        resolve: data
    })
}

module.exports = main
