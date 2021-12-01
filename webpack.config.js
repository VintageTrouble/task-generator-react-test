const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, '/src', 'index.js'),
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "index_bundle.js",
      publicPath: '/'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        historyApiFallback: true,
        compress: true,
        port: 3000,
        open: true,
        hot: true
    },
    resolve: {
        alias: {
          'Styles': path.resolve(__dirname, 'src/styles'),
          'Components': path.resolve(__dirname, 'src/components'),
          'Pages': path.resolve(__dirname, 'src/Pages'),
          'API': path.resolve(__dirname, 'src/api'),
          'Redux': path.resolve(__dirname, 'src/redux')
        },
    },    
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options:{
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react'
                ],
                plugins: [
                    '@babel/transform-runtime'
                ]
              }
            },              
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, '/public', 'index.html')
        })
    ]
};