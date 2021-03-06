const Path = require('path');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    output: {
        filename: 'js/test.js',
    },
    devServer: {
        inline: true,
    },
    plugins: [
        new Webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: Path.resolve(__dirname, './src'),
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ['to-string-loader', 'css-loader'],
            },
            {
                test: /\.s?css$/i,
                use: ['style-loader', 'css-loader?sourceMap=true', 'sass-loader'],
            },
        ],
    },
});
