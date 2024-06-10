const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development', // Change to 'production' for production builds
    entry: "./src/index.ts", // Change to your main file
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname + "/public")
    },
    devtool: 'source-map', // Enable source maps for better debugging
    module: {
        rules: [
            {
                test: /\.ts$/,  // Apply to both .ts and .tsx files
                use: "babel-loader", // move from ts-loader to babel-loader when babel is installed
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new CleanWebpackPlugin() // Clean the output directory before each build
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    }
};