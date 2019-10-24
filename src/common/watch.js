/*
    webpack 文件常驻监听
    author: svon.me@gmail.com
*/
function main(env) {
    if (env.watch) {
        let data = {
            watch: true,
            watchOptions: {
                poll: 1000,
                aggregateTimeout: 300,
            }
        }
        return Promise.resolve(data)
    }
    return Promise.resolve({})
}


module.exports = main
