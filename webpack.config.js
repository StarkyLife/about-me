const path = require('path');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const modeConfig = (env) => require(`./build-utils/webpack.${env.mode}`)(env);

module.exports = (env = { mode: 'production' }) =>
    webpackMerge(
        {
            mode: env.mode,
            resolve: {
                // see below for an explanation
                alias: {
                    svelte: path.resolve('node_modules', 'svelte'),
                },
                extensions: ['.mjs', '.js', '.svelte'],
                mainFields: ['svelte', 'browser', 'module', 'main'],
            },
            module: {
                rules: [
                    {
                        test: /\.svelte$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'svelte-loader',
                            options: {
                                emitCss: true,
                            },
                        },
                    },
                    {
                        test: /\.(jpe?g)|(png)|(pdf)$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'url-loader',
                            options: {
                                limit: 5000,
                            },
                        },
                    },
                ],
            },
            plugins: [
                new HtmlWebpackPlugin({
                    title: 'Ismagilov Ilshat',
                    meta: {
                        description: 'Personal website-portfolio',
                        author: 'Ismagilov Ilshat (StarkyLife)',
                    },
                }),
            ],
        },
        modeConfig(env),
    );
