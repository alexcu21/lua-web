const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/",
        assetModuleFilename: "assets/images/[hash][ext][query]"
    },
    mode: "development",
    resolve: {
        extensions: ['.js', '.jsx'],
        alias:{
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@images': path.resolve(__dirname, 'src/assets/images/'),
    
        },
    },
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader:"babel-loader"
                }
            },
            {
                test: /\.html$/,
                use:{
                    loader: "html-loader"
                }
            },
            {
                test: /\.(css|scss)$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpeg)$/,
                type:'asset/resource'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        })
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress:true,
        port: 3006,
        historyApiFallback: true
    }
}