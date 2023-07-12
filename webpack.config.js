const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false, // this is a workaround for a bug in file-loader
            name: "[name].[hash].[ext]", // this will use the original file
            outputPath: "assets/imgs" // this will output the file in dist/assets/imgs
          }
        }
      },
    ],
  },
};