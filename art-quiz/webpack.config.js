const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    mode: "development",
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src/'),
            assets: path.resolve(__dirname, 'src/assets/'),
        }},
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: false },
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                'src/styles/vars.scss',
                            ]
                        },
                    }

                ]
            },
            {
                test: /\.(svg|png|jpg)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(mp3|wav)$/,
                type: 'asset/resource'
            },
           
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ],
    devServer: {
        compress: true,
        port: 3000,
    },
};