var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');



module.exports = {
	entry : {
		app: './src/app.js',
		vendors: './src/vendors.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	externals: {
		jquery: "jQuery",
	},
	module: {
		rules: [
			{test: /\.(js|jsx)$/, use: 'babel-loader'}
		]	
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	path: path.resolve(__dirname, 'dist'),
	 //        name: "vendor",
	 //        filename:"vendor.js",
	 //        minChunks: Infinity
	 //    }),
		new htmlWebpackPlugin({
			template: './index.html',
			inject:'body',
			hash: true,
			chunks: ['app','vendors']
		}),

		// new  webpack.optimize.CommonsChunkPlugin('common.js', ['app','vendors'])

	]
	
}