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
				include: /src/,
				loader: 'react-hot!babel?presets[]=react,presets[]=es2015'
			},
			{
				test: /\.css$/,
				include: /src/,
				loaders: [
			      'style-loader',
			      'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]',
			      'postcss-loader'
			    ]
			}
		]
	},
	resolve: {
		extension: ['js', 'css']
	}
	plugins: [
		// new webpack.HotModuleReplacementPlugin()
	]
}