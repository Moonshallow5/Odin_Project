const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // Entry file for the application
  output: {
    filename: "main.js", // Output file name
    path: path.resolve(__dirname, "dist"),
    clean: true, // Clean dist folder before build
  },
  devtool: "eval-source-map", // Source maps for easier debugging
  devServer: {
    static: path.resolve(__dirname, "dist"), // Serve static files from dist folder
    port: 8080,
    watchFiles: ["./src/template.html"], // Watch for changes in template.html
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Use the template HTML file
      filename: "index.html", // Generate index.html in dist folder
      inject: "body", // Inject the script tag at the end of the body
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // CSS handling rule
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource", // Handle image files
      },
    ],
  },
};
