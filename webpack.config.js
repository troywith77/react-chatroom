var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		"webpack-dev-server/client?http://localhost:8080/",
		"webpack/hot/dev-server",
		'./src/index.js'
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'react-hot!babel?presets[]=react,presets[]=es2015'
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: 'build/',
		inline: true,
		hot: true,
		historyApiFallback: true,
		compress: true,
		quiet: false,
		noInfo: false,
		lazy: true,
		filename: 'bundle.js'
	}
}