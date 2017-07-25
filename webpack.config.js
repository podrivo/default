// const path = require('path')
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'index' : `./assets/js/global.js`
  },
  output: {
  //   path: './dist',
    filename: 'app.js',
  },
  // resolve: {
  //   modules: [ 'node_modules', 'src' ],
  //   extensions: [".js", ".scss", ".css", ".html"]
  // },
  module: {
    // rules: [
    //   {
    //     test: /\.scss$/,
    //     use: ExtractTextPlugin.extract({
    //       use: ['css-loader', 'sass-loader']
    //     })
    //   }
    // ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      // server: { baseDir: ['./'] }
      // proxy: 'http://localhost:8080/'
    }),
    // new ExtractTextPlugin({
    //  filename: 'style.css'
    // })
  ]
}


// const ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
 * Asset Paths
 * Modify these to match your project.
 */
// const ASSET_PATH = path.resolve('resources/assets')
// const APP_FILE_PATH = `${ASSET_PATH}/js/app.js`
// const PUBLIC_PATH = 'public'
//
// module.exports = function(env) {
//   return {
//     entry: APP_FILE_PATH, // Tells webpack where to start requiring assets from
//     output: {
//       path: PUBLIC_PATH, // When transpiled webpack, this is the final destination for assets
//       filename: 'js/app.js', // The name and directory we want our js to end up
//       publicPath: '/',
//     },
//     resolve: {
//       extensions: ['.scss', '.js'], // How we tell webpack to discover the varying filetypes in our project
//     },
//     module: {
//       // Loaders are the preprocessors used to transpile SASS to CSS or ES6 JavaScript to ES5 JavaScript
//       loaders: [
//         {
//           test:/\.js$/,
//           loader: 'babel-loader', // Loader used to tranform the matching code (e.g. coffee-loader)
//           include: [
//             `${ASSET_PATH}/js`, // Cuts build time in half
//           ],
//         },
//       ],
//     },
//   }
// }
