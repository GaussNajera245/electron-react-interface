// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { default: MiniCssExtractPlugin } = require('mini-css-extract-plugin');
let mode = "development";

if(process.env.NODE_ENV === "production"){
    mode = "production";
};

console.table({A:process.env.NODE_ENV ,B:process.env.NODE_ENV === "production", mode});
module.exports = {
    mode,
    plugins: [ new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
              },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },

    resolve: {
        extensions: [".js", ".jsx"]
    },
    devtool: "source-map",
    devServer: {
        hot: true,
        static: "./dist"
    }
}