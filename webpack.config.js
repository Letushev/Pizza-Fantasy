const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const googleFontsPlugin = require('google-fonts-webpack-plugin');

const extractSass = new extractTextPlugin({
  filename: './styles.css'
});

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: './js/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },

  module: {
    rules: [

      {
        test: /\.scss$/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [[ 'env', {
                targets: {
                  browsers: ['last 2 versions', 'ie >= 10']
                }
              }]]
            }
          }
        ]
      },

      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10 * 1024
        }
      },

      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          limit: 10 * 1024,
          noquotes: true
        }
      },

      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'image-webpack-loader',
        enforce: 'pre'
      }

    ]
  },

  plugins: [
    extractSass,

    new htmlPlugin({
      template: './index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true
      }
    }),

    new googleFontsPlugin({
      fonts: [
        { family: 'Ubuntu Mono'},
        { family: 'Dancing Script'}
      ]
    })
  ]
};