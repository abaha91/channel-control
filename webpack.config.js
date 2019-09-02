const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        alias: {
            Images: path.resolve(__dirname, 'src/img'),
            Components: path.resolve(__dirname, 'src/components'),
            Context: path.resolve(__dirname, 'src/context'),
        }
    },
    module: {
        rules: [

            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.ts|\.tsx$/, loader: 'ts-loader'},
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    "css-loader",
                ]
            },
            {
                test: /\.(gif|svg|jpg|png)$/,
                loader: "file-loader",
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 4300,
        hot: true,
    }
};