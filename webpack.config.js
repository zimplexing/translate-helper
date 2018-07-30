module.exports = {
  entry: './index.ts',
  output: {
    filename: 'index.js'
  },
  target: "node",
  mode: "development",
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    }]
  }
}