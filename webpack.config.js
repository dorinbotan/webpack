const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

module.exports = {
    mode,
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|svg|giv)$/i,
                type: 'asset',
                // type: 'asset/inline',
                // type: 'asset/resource',
            },
            {
                test: /\.s[ac]{1}ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
        ]
    },
    output: {
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    devtool: 'source-map',
    devServer: {
        static: './dist',
        open: true,
        hot: true,
    },
}
