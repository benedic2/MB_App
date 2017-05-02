var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin =require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
      publicPath: 'dist/',
    filename: 'bundle.js'
  },
    module: {
        rules:[
            {
            use: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
        use: ['style-loader','css-loader'],
        test: /\.css$/
        },
        {
        test:/\.(jpe?g|png|gif|svg|ico)$/,
        use: [
            {
                loader:'url-loader',
                options: {limit:40000}
            },
            'image-webpack-loader'
        ]
        }
        ]
    },
    plugins: [
        new webpack.DefinePlugin ({
            'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV)
        })
    ]
};
