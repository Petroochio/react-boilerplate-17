const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');

const PATHS = {
  // add more directories here based on project structure
  app: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
};

const common = merge([
  {
    entry: {
      app: PATHS.app,
    },
    output: {
      path: PATHS.dist,
      filename: 'bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'src/index.html' }),
      // new webpack.ProvidePlugin({
      //   Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
      //   fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
      // }),
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.scss'],
    },
  },
]);

module.exports = function (env) {
  // prod build
  // Add stuff from webpack.parts.js as needed
  if (env === 'production') {
    return merge([
      common,
      // highest quality sourcemaps, more build time for production debugging
      parts.generateSourceMaps({ type: 'source-map' }),
      parts.loadJavascript(PATHS.app),
      parts.loadCss(PATHS.app),
      parts.minifyJavascript(),
      parts.compressImages(PATHS.app),
    ]);
  }

  return merge([
    common,
    {
      output: {
        devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
      },
    },
    {
      plugins: [
        new webpack.NamedModulesPlugin(),
      ],
    },
    parts.devServer({
      host: process.env.HOST,
      port: process.env.PORT,
    }),
    // wraps code in a base64 string, higher quality with faster rebuild times
    parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' }),
    parts.loadJavascript(PATHS.app),
    parts.loadCss(PATHS.app),
    parts.compressImages(PATHS.app),
  ]);
};
