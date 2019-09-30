const path = require("path");
const { TypedCssModulesPlugin } = require("typed-css-modules-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        exclude: /\.module\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"]
      },
      {
        test: /\.module\.styl$/,
        use: [
          "style-loader",
          // Use CSS Modules
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          "stylus-loader"
        ]
      },
      {
        // For pure CSS (without CSS modules)
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.module\.css$/,
        use: [
          "style-loader",
          // Use CSS Modules
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  // Generate typing declarations for all CSS files under `src/` directory.
  plugins: [
    new TypedCssModulesPlugin({
      globPattern: "src/**/*.module.css"
    })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: "./dist",
    stats: { colors: true }
  }
};
