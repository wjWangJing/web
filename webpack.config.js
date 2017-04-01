const webpack = require("webpack");
const path = require("path");

module.exports = {
    context: __dirname + "/src",
    entry: "./js/root.js",
    module : {
        loaders : [
            {
                test : /\.js?$/,
                exclude : /(node_modules)/,
                loader : "babel-loader",
                query : {
                    presets : ["react","es2015"]
                }
            },{
                test : /\.css?$/,
                loader : "style-loader!css-loader",
            },{
                test: /\.(jpg|png)$/,
                loader: "url-loader?limit=50000&name=[path][name].[ext]"
            }
        ]
    },
    output: {
        path: __dirname + "/src/js",
        filename: "bundle.js"
    },
    devServer: {
        historyApiFallback: true,
        inline: true
    },
};