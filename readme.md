```
yarn add --dev webpack webpack-cli webpack-dev-server typescript ts-loader 
yarn add react react-dom
yarn add --dev @types/react @types/react-dom

yarn add --dev style-loader css-loader typed-css-modules-webpack-plugin

yarn add --dev stylus-loader stylus
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true
  }
}
```

```javascript
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: "./dist",
    stats: {colors: true},
  }
};
```