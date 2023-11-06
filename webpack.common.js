const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');


module.exports = {
    mode: "development",
    devtool: 'cheap-module-source-map',
    entry: {
        popup: path.resolve('./src/popup/popup.tsx'), 
        options: path.resolve('./src/options/options.tsx'),
        background: path.resolve('./src/background/background.ts'),
        contentScript: path.resolve('./src/contentScript/contentScript.ts'),
        newTab: path.resolve('./src/tabs/index.tsx'),
        magnifier: path.resolve('./src/tabs/magnifier.tsx')
    },
    module: {
        rules: [
            {
                use: "ts-loader",
                test: /\.tsx$/,
                exclude: /node_modules/
            },
            {
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            indent: 'postcss',
                            plugins: [tailwindcss, autoprefixer],
                        },
                    }
                }],
                test: /\.css$/i,
            },
            {
                type: 'assets/resource',
                use: 'asset/resource',
                test: /\.(png|jpg|jpeg|gif|woff|woff2|tff|eot|svg)$/,
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve('src/static/'),
                    to: path.resolve('dist')
                }
            ],
        }),
        ... getHtmlPlugins([
            'popup',
            'options',
            'newTab'
        ])
    ],
    resolve:{
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
}

function getHtmlPlugins(chunks) {
    return chunks.map(chunk => new HtmlPlugin({
        title: 'Senior Support',
        filename: `${chunk}.html`,
        chunks: [chunk]
    }))
}