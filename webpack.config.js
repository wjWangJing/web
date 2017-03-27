const webpack = require("webpack");
const path = require("path");

module.exports = {
    context: __dirname + "/src",
    entry: "./js/index.js",
    module : {
        loaders : [{
            test : /\.js?$/,
            exclude : /(node_modules)/,
            loader : "babel-loader",
            query : {
                presets : ["react","es2015"]
            }
        }]
    },
    output: {
        path: __dirname + "/src/js",
        filename: "bundle.js"
    },
    devServer : {
        inline:true,
        hot: true,
        progress :true
    }
};