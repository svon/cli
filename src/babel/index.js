/*
    babel 配置
*/
let rules = [
    {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    '@babel/plugin-transform-arrow-functions',
                    '@babel/plugin-transform-runtime'
                ]
            }
        }
    },
]

function main() {
    return rules
}

module.exports = main
