/*
    处理命令中的参数
    author: svon.me@gmail.com
*/

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
            i += 1
        }
    }
    return data
}

module.exports = getArgv
