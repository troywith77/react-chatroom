var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
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
		// new webpack.HotModuleReplacementPlugin()
	]
}