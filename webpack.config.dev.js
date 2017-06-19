	var path = require('path');
	var htmlWebpackPlugin = require('html-webpack-plugin');
	var ExtractTextPlugin = require('extract-text-webpack-plugin');
	var webpack = require('webpack');

	module.exports = {
		devtool: 'cheap-module-eval-source-map',
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
			vendors: ['jquery', 'Vue', 'Vuex', 'VueRouter', 'axios']
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			// publicPath: path.resolve(__dirname, 'dist'),
			filename: '[name].js'
		},
		devServer: {
			contentBase: path.join(__dirname, "dist"),
			inline: true,
			hot: true,
			compress: true,
			port: 8888,
			publicPath: 'http://localhost:8888/'
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					use: 'babel-loader',
					exclude: path.resolve(__dirname, 'node_modules/')
				},
				{
			        test: /\.scss$/,
			        use: ['style-loader', 'css-loader', 'sass-loader']
			    },
			    {
					test: /\.(jpe?g|png|gif|svg)$/,
					use: 'url-loader?limit=8192'
				}
			]	
		},
		plugins: [
			new webpack.optimize.CommonsChunkPlugin({
				name: ['vendors', 'manifest'],
				minChunks: Infinity
			}),

			new htmlWebpackPlugin({
				template: './index.html',
				inject:'body',
				hash: true,
				chunks: ['vendors', 'manifest', 'app']
			}),

			new webpack.HotModuleReplacementPlugin()

		]
		
	}