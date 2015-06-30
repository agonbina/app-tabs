var path = require('path')
var BowerWebpackPlugin = require("bower-webpack-plugin")

module.exports = {
	resolveLoader: { fallback: path.join(__dirname, "node_modules") },
	entry: './src/app/main.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module:  {
		loaders: [
			{ test:   /\.css$/, loader: "style-loader!css-loader" }, 
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
			{ test: /\.jade/, loader: 'html!jade-html' }
		]
	},
	plugins: [new BowerWebpackPlugin()]
}
