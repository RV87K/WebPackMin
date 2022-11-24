const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main:'./src/index.js',  //указываем входной файл
        analytics: './src/analytics.js' //ещё один входной файл
    },
    output: {                 //место для складвания
        filename: '[name].bundle.js',  //для устранения ошибки указываем паттерн[name]
        path: path.resolve(__dirname, 'dist') //отталкиваясь от текущей директории (системная переменная __dirname) указываем пкть в папку dist
    },
}