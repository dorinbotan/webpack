let mode = 'development';

if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

module.exports = {
    mode,
    devtool: 'source-map',
    devServer: {
        open: true,
        static: './dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
}
