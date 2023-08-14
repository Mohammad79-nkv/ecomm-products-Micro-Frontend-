const HtmlWebpackPlugin = require("html-webpack-plugin");
const { container } = require("webpack/lib")

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./productsIndex" : "./src/index.js"
      } 
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
