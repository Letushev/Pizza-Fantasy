module.exports = (env = {}) => {
  return {
    entry: ['./js/index.js', './css/scss/main.scss'],
    output: {
      filename: 'js/main.js',
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'styles.css',
                outputPath: 'css/'
              }
            },
            {
              loader: 'extract-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    }
  }
};

