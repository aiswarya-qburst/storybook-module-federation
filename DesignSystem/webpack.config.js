const path = require("path");
const { StorybookWebpackFederationPlugin } = require("storybook-webpack-federation-plugin");

module.exports = {
    cache: false,

    mode: "development",
    devtool: "source-map",

    optimization: {
        minimize: false,
    },

    resolve: {
        extensions: ["*", ".js", ".jsx"],
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
            {
                test: /\.png$/i,
                use: ["file-loader"],
            }
        ],
    },

    output: {
        // location of where the compiled Storybook lives
        path: path.resolve(__dirname, "storybook-static/federation"),
        // the url where Storybook will be accessible from
        publicPath: "//localhost:3030/federation/",
    },

    plugins: [new StorybookWebpackFederationPlugin({
        name: "xolvio_ui", // this will be used by the consuming federation host
        files: { // paths to the components
            paths: ["./src/**/*.js{,x}"],
        },
    }),],
};