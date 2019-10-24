/*
    样式规则
    author: svon.me@gmail.com
*/

function style(name) {
    return {
        test: /\.css$/,
        use: [
            'vue-style-loader',
            {
                loader: 'css-loader',
                options: { importLoaders: 1 }
            },
            'postcss-loader',
            name + '-loader'
        ]
    }
}

function main() {
    let styles = []
    let names = ['sass', 'less', 'styleus']
    for(var i = 0, size = names.length; i < size; i++) {
        styles.push(style(names[i]))
    }
    return styles
}

module.exports = main
