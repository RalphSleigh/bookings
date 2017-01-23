webpack = require('webpack');

module.exports = {
    entry: {
          app: './front/index.js',
          vendor: ['react','redux','react-redux','react-dom','immutable','moment','redux-auth-wrapper','lodash','react-markdown']},
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
	
    plugins: [
    new webpack.optimize.CommonsChunkPlugin({name:"vendor",filename:"vendor.bundle.js"}),
	new webpack.SourceMapDevToolPlugin({
            filename: "[file].map",
            exclude: "vendor"
        })
  ]
};