const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: './',
        filename: 'bundle.js'
    },
    resolve: {
        root: [
            path.resolve('./src/js')
        ]
    },
    devServer: {
        inline: true,
        port: 3333,
        historyApiFallback: {
            index: ''
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: path.resolve(__dirname, "src/js")
            }
        ]
    },
    devtool: '#inline-source-map'
};