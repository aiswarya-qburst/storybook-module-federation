const HtmlWebpackPlugin = require("html-webpack-plugin");
const { StorybookWebpackFederationPlugin } = require("storybook-webpack-federation-plugin");

const path = require("path");

module.exports = {
    entry: "./src/index",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        chunkFilename: "[id].[chunkhash].js",
    },
    resolve: {
        extensions: [".jsx", ".js", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: require.resolve("babel-loader"),
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new StorybookWebpackFederationPlugin({
            remotes: ["xolvio_ui"],
        }),
    ],
};