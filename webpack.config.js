const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'swdk.js',
        library: 'SwimlaneWidgetDevKit',
        libraryTarget: 'umd', // Universal Module Definition
        globalObject: 'this'
    },
    mode: 'production',
    optimization: {
        minimize: false // Ensure minification is disabled
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    devtool: 'eval-source-map' 
};
