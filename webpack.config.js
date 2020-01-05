let path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: "main.js",
        publicPath: "build/"
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // exclude: '/node_modules/'
            },
            {
                test: /\.css$/i,
                use: ExtractTextPlugin.extract({
                    //fallback: "style-loader",
                    use: "css-loader"
                })
                /*use: [
                    'style-loader',
                    'css-loader'
                ]*/
            },
            {
                test: /\.s?css$/i,
                use: ExtractTextPlugin.extract({
                    //fallback: "style-loader",
                    use: "css-loader"
                })
                // use: [
                //     'style-loader',
                //     'css-loader?sourceMap=true',
                //     'sass-loader'
                // ]
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin("style/index.css"),
    ]
};

module.exports = (env, options) => {
    let production = options.mode === 'production';

    conf.devtool = production
                    ? false
                    : "eval-sourcemap";

    return conf;
}
