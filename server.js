var express = require('express');
var app = express();
var webpack = require('webpack');
import path from 'path'

app.use(express.static(__dirname + '/build/stylesheets'));

const config = require('./webpack.config')
const compiler = webpack(config)
app.use(require('webpack-dev-middleware')(compiler, {hot: true, publicPath: config.output.publicPath, noInfo: true}))
app.use(require('webpack-hot-middleware')(compiler))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'))
})

var server = app.listen(8080, function () {
  console.log('Listening at http://localhost:%s', server.address().port);
});
