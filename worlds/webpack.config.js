module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devServer: {
    hot: true,
    port: 7000,
  },
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
};
