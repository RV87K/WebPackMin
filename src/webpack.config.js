const path = require('path')

module.exports = {
    entry: './src/index.js',  //указываем входной файл
    output: {                 //место для складвания
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') //отталкиваясь от текущей директории (системная переменная __dirname) указываем пкть в папку dist
    }
}