module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'app/index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2016', 'react', 'stage-2'],
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.scss'],
  },
};
