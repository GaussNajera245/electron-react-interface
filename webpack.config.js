// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { default: MiniCssExtractPlugin } = require('mini-css-extract-plugin');
let mode = "development";


if(process.env.NODE_ENV === "production"){
    mode = "production";
};

module.exports = {
    mode,
    plugins: [ new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
              },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devtool: "source-map",
    devServer: {
        hot: true,
        static: "./dist"
    }
}