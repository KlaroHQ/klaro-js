const path = require('path');

const ENV = process.env.ENV || 'dev';

const config = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

if (ENV === 'dev') {
  console.log("Starting dev server!");
  config.mode = 'development';
  config.devServer = {
    hot: true,
    compress: true,
    port: 9000,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
    client: {
      overlay: true,
    }
  }
}

module.exports = config;
