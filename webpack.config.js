const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    publicPath: '/'
  },
  resolve: {
    alias: {
      actions: path.resolve(__dirname, "src/actions/"),
      components: path.resolve(__dirname, "src/components/"),
      reducers: path.resolve(__dirname, "src/reducers/"),
      selectors: path.resolve(__dirname, "src/selectors/"),
      settings: path.resolve(__dirname, "src/settings/")
    },
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
