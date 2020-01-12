const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: Path.join(__dirname, './build'),
        filename: 'js/test.js',
        // library: 'index',
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //         name: false,
    //     },
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: Path.join(__dirname, './src/index.html'),
            filename: './index.html'
        }),
    ],
    resolve: {
        alias: {
            '~': Path.resolve(__dirname, './src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto',
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ['to-string-loader', 'css-loader'],
            },
            {
                test: /\.js?$/,
                loader: 'babel-loader',
            },
        ],
    },
};
