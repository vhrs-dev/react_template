React project from scratch using Webpack 4 and Babel

1. Folder Structure

react_template
    |--src
        |--components
        |--styles

In the terminal:
mkdir react_template
cd react_template
mkdir -p src/components src/styles

2. Initialize the Project. In the terminal:
npm init -y

3. Installing Webpack and webpack-cli. In the terminal:
npm install webpack webpack-cli --save-dev

4. Installing React. In the terminal:
npm install react react-dom --save

5. Installing Babel

https://babeljs.io/setup#installation

In the terminal:
npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

6. Create an index.js file inside root of the /src folder

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import test from "./components/test.js";

ReactDOM.render(<App />, document.getElementById("root"));

7. Create an index.html file inside root of the /src folder

<body>
    <div id="root"></div>
</body>

8. Create a webpack.config.js in the root directory

const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js'
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

9. Install css-loader and style-loader for Webpack. In the terminal:
npm install css-loader style-loader --save-dev

10. Compiling files using Webpack. In package.json section "scripts":
"start": "webpack-dev-server --mode development --open --hot",
"build": "webpack --mode production"

11. Installing Html-webpack-plugin for generate output html to build/index.html:

in the terminal:
npm install html-webpack-plugin --save-dev

12. Installing Webpack-dev-server. In the terminal:
npm install webpack-dev-server --save-dev

13. In the terminal:
npm start

You should see the browser window open and display "My React App!"