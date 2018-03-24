const webpack = require('webpack');
const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const PROD = (process.env.NODE_ENV === 'production');


console.log(PROD);

module.exports = {
    entry: {
        app: './front/index.js',
        vendor: ['babel-polyfill', 'whatwg-fetch', 'react', 'redux', 'react-redux', 'react-dom', 'immutable', 'moment', 'redux-auth-wrapper', 'lodash/cloneDeep', 'lodash/map', 'react-markdown', 'react-table', 'react-router', 'react-beautiful-dnd', 'react-bootstrap-typeahead']

    },

    resolve: {
        alias: {
            '@fortawesome/fontawesome-free-solid$': '@fortawesome/fontawesome-free-solid/shakable.es.js'
        }
    },

    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'resolve-url-loader']
        }, {
            test: /\.(gif|ttf|eot|svg|woff2?)$/, use: {
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }
        }]
    },
    externals: {
        fs: '{}'
    },

    plugins: [
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb/),
        new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "vendor.bundle.js"})
    ]
};


if (PROD) module.exports.plugins.push(new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('production')
    }
}), new MinifyPlugin());

else module.exports.plugins.push(new webpack.SourceMapDevToolPlugin({
    filename: "[file].map",
    exclude: "vendor"
}));

if (!PROD) module.exports.plugins.push(new BundleAnalyzerPlugin());