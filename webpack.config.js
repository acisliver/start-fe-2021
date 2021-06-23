const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //엔트리 파일의 위치 1개의 번들
    entry: './src/app.js',
    //빌드되어 배포될 위치
    output: {
        filename: 'app.js',
        path: `${__dirname}/dist`,
    },
    //Auto Reloading을 위한 위치
    devServer: {
        contentBase: './dist',
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};