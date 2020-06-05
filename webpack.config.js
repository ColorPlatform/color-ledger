const config = {
  devtool: "cheap-source-map",
  entry: ['./src/color-ledger.ts'],
  output: {
    path: __dirname + '/lib',
    filename: 'color-ledger.js',
    library: 'color-ledger',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        query: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}
module.exports = config;