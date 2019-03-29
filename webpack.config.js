module.exports = {
  entry: './src/index.ts',
  target: 'node',
  mode: 'development',
  output: {
    filename: './[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.ts$/,
        exclude: [/\.(spec|e2e)\.ts$/],
        enforce: 'post',
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: { esModules: true }
        }
      }
    ]
  }
};
