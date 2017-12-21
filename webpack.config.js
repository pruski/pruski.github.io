const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    resolve: {
        modules: [
            path.join(__dirname, "src/js"),
            "node_modules"
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
                loaders: ['babel-loader'],
                exclude: /node_modules/,
                include: path.resolve(__dirname, "src/js")
            }
        ]
    },
    devtool: '#inline-source-map'
};
