const webpack = require('webpack');
const ClosureCompilerPlugin = require('webpack-closure-compiler');

// dev server
// webpack-dev-server (WDS) will look for this config
exports.devServer = function (options) {
  return {
    devServer: {
      historyApiFallback: true,
      hot: true,
      hotOnly: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  };
};

// Babel loader
exports.loadJavascript = function (paths) {
  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: paths,
          loader: 'babel-loader',
          query: {
            // enable caching for performance during dev
            cacheDirectory: true,
            presets: ['react', 'es2015', 'stage-2'],
          },
        },
      ],
    },
  };
};

exports.minifyJavascript = function () {
  return {
    plugins: [
      new ClosureCompilerPlugin({
        compiler: {
          language_in: 'ECMASCRIPT6',
          language_out: 'ECMASCRIPT5',
          compilation_level: 'ADVANCED',
        },
        concurrency: 2,
      }),
    ],
  };
};

// Scss loader
exports.loadCss = function (paths) {
  return {
    module: {
      rules: [
        {
          test: /\.scss/,
          include: paths,
          loaders: ['style-loader', 'css-loader?minimize', 'resolve-url-loader', 'sass-loader?sourceMap'],
        },
      ],
    },
  };
};

// sourcemaps
exports.generateSourceMaps = function ({ type }) {
  return {
    devtool: type,
  };
};

// image compression
exports.compressImages = function (paths) {
  return {
    module: {
      rules: [
        {
          test: /\.(png|jpg|jpeg|gif)$/,
          include: paths,
          use: [
            {
              loader: 'image-webpack-loader',
              query: {
                gifsicle: {
                  interlaced: false,
                },
                optipng: {
                  optimizationLevel: 7,
                },
              },
            },
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
  };
};
