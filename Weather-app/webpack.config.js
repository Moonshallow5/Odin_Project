const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js", // Keeps filename consistent in development
    path: path.resolve(__dirname, "dist"),
    clean: true, // Clears old files in dist before each build
  },
  devtool: "eval-source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"), // Serve from dist folder
    port: 8080,
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Correct template path
      filename: "index.html", // Ensures only one index.html is generated
      inject: "body", // Ensures script is injected at the end of body
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource", // Handles assets such as images
      },
    ],
  },
};
