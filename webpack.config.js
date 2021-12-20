const path = require('path');

module.exports = {
    //  this is configuration setting which will be now in used by
    //  web pack.
    //
    //  we can change the default webpack.config.js filte name to some
    //  thing else like mywebpack.js to able to work with these changes
    //  we need to pass the --config mywebpack.js with the default webpack
    //  command other wise it will look for the default file name which is
    //  webpack.config.js

    /**
     *  development : - will produce the out put which could be used for debugging
     *  production : - will create best possible code for production mode
     */
    mode: 'production',

    /**
     *  by default entry-point is src/index.js which can be changed to customfile
     *  as done below value.
     */
    entry: ['./src/bootstrap.js', './src/bootstrap1.js'],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'client.min.js',
        publicPath: '/assests/'
    },

    devServer: {
        port:3737,
        static: path.join(__dirname, 'dist'),
        devMiddleware: {
            writeToDisk: false
        }
    }
}