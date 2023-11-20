const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = (env, argv) => {
  const isDev = argv.mode === "development";

  return {
    entry: isDev ? "./example.jsx" : "./src/index.jsx",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.js[x]?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    devServer: {
      port: 5200,
    },
    plugins: [
      isDev
        ? new HtmlWebpackPlugin({ template: "./index.html" })
        : new WebpackManifestPlugin(),
    ],
    resolve: {
      extensions: [".js", ".jsx"],
    },
  };
};
