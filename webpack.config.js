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
	module: {
		rules: [
			{test: /\.(js|jsx)$/, use: 'babel-loader'}
		]	
	},
	//  这种情况会全部打包进 app.js
	resolve: {
		alias: {
			jquery: path.resolve(__dirname, 'src/lib/jquery-1.11.1.min.js'),
			Vue: path.resolve(__dirname, 'src/lib/vue.js'),
			Vuex: path.resolve(__dirname, 'src/lib/vuex.js'),
			VueRouter: path.resolve(__dirname, 'src/lib/vue-router.min.js'),
			axios: path.resolve(__dirname, 'src/lib/axios.min.js')
		}
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
			chunks: ['app']
		}),

		// new  webpack.optimize.CommonsChunkPlugin('vendors.js', ['vendors'])

	]
	
}