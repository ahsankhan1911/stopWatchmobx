var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var ip = require('ip');

var ipAdd = ip.address();

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, ipAdd, function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Server running on your Local IP ' + ipAdd +':3000');
});
