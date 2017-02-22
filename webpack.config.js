var webpack = require('webpack');

var PROD = (process.env.NODE_ENV === 'production')

module.exports = {
    entry: {
          app: './front/index.js',
          vendor: ['babel-polyfill', 'whatwg-fetch', 'react','redux','react-redux','react-dom','immutable','moment','redux-auth-wrapper','lodash','react-markdown','react-table']},
    output: {
        path:     'public',
        filename: 'bundle.js',
    },
	module: {
        loaders: [
            {
                test:   /\.js/,
                loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react'],
                    plugins: ["transform-object-rest-spread"]
				}
            },
			{
				test: /\.json$/,
				loader: 'json'
			}
        ],
    },
	externals:{
		fs:'{}'
	},
	
    plugins: [
    new webpack.optimize.CommonsChunkPlugin({name:"vendor",filename:"vendor.bundle.js"}),
	new webpack.SourceMapDevToolPlugin({
            filename: "[file].map",
            exclude: "vendor"
        })
  ]
};

if(PROD) module.exports.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
}),new webpack.optimize.UglifyJsPlugin());