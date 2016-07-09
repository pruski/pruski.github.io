const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: './',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                include: [path.resolve(__dirname, "src/js")]
            }
        ]
    },
    devtool: '#inline-source-map'
    // module: {
    //     loaders: [{
    //         test: /\.js$/,
    //         exclude: /node_modules/,
    //         loader: 'babel',
    //         query: {
    //             presets: ['es2015', 'react']
    //         }
    //     }]
    // }
};