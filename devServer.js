var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');

var config = require("./webpack.config.js");

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
	contentBase: 'build/',
	inline: true,
	hot: true,
	historyApiFallback: true,
	compress: true,
	quiet: false,
	noInfo: false,
	lazy: true,
	filename: 'bundle.js',
})

server.listen(8080, function() {
	console.log('App is running on port 8080.')
})