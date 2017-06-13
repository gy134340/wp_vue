var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');


// note: resolve 放在 entry 前方，否则 vendor 读不到
module.exports = {
	resolve: {
		alias: {
			jquery: path.resolve(__dirname, 'src/lib/jquery-1.11.1.min.js'),
			Vue: path.resolve(__dirname, 'src/lib/vue.js'),
			Vuex: path.resolve(__dirname, 'src/lib/vuex.js'),
			VueRouter: path.resolve(__dirname, 'src/lib/vue-router.min.js'),
			axios: path.resolve(__dirname, 'src/lib/axios.min.js')
		}
	},
	entry : {
		app: './src/app.js',
		// vendors: [
		// 	'./src/lib/jquery-1.11.1.min.js',
		// 	'./src/lib/vue.js',
		// 	'./src/lib/vuex.js',
		// 	'./src/lib/vue-router.min.js',
		// 	'./src/lib/axios.min.js',
		// ]
		vendors: ['jquery', 'Vue', 'Vuex', 'VueRouter', 'axios']
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
	// resolve: {
	// 	alias: {
	// 		jquery: path.resolve(__dirname, 'src/lib/jquery-1.11.1.min.js'),
	// 		Vue: path.resolve(__dirname, 'src/lib/vue.js'),
	// 		Vuex: path.resolve(__dirname, 'src/lib/vuex.js'),
	// 		VueRouter: path.resolve(__dirname, 'src/lib/vue-router.min.js'),
	// 		axios: path.resolve(__dirname, 'src/lib/axios.min.js')
	// 	}
	// },
	// externals: {
	// 	jquery: 'jQuery',
	// 	Vue: 'Vue'
	// },
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	path: path.resolve(__dirname, 'dist'),
	 //        name: "vendor",
	 //        filename:"vendor.js",
	 //        minChunks: Infinity
	 //    }),
		

		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendors','manifest'],
			minChunks: Infinity
		}),

		new htmlWebpackPlugin({
			template: './index.html',
			inject:'body',
			hash: true,
			chunks: ['vendors', 'manifest', 'app']
		}),

	]
	
}