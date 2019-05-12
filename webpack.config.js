const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
   // devtool: 'source-map',
   entry: './src/index.js',
   output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js'
      // publicPath: '/build/'
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
               {
                  loader: 'babel-loader',
                  options: { presets: ['@babel/preset-env', '@babel/preset-react'] }
               }
            ]
         },
         {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: "./src/index.html"
      })
   ]
};