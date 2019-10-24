/*
    样式规则
    author: svon.me@gmail.com
*/

function main() {
    let styles = [
        {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: { importLoaders: 1 }
                },
                'postcss-loader'
            ]
        },
        {
            test: /\.scss$/,
            use: [
                'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: { importLoaders: 1 }
                },
                'postcss-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.less$/,
            use: [
                'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: { importLoaders: 1 }
                },
                'postcss-loader',
                'less-loader'
            ]
        },
        {
            test: /\.styleus$/,
            use: [
                'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: { importLoaders: 1 }
                },
                'postcss-loader',
                'styleus-loader'
            ]
        }
    ]
    return styles
}

module.exports = main
