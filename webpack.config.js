const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry: [
		'./index.js'
	],
	output: {
		path: __dirname + '/public',
		publicPath: '/public/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'stage-0']
				}
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "sass-loader" // compiles Sass to CSS
				}]
			}
			//{
			//	test: /\.scss$/,
			//	loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
			//},
			//{
			//	test: /\.css$/,
			//	loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			//}
		]	
	},
	//plugins: [
	//	new ExtractTextPlugin('styles.css', {
	//		allChunks: true
	//	})
	//]
};
