import path from 'path'
import express from 'express'
import webpack from 'webpack'

const app = express()
app.use(express.static(path.join(__dirname, '/build/stylesheets')))

const config = require('./webpack.config')
const compiler = webpack(config)
app.use(require('webpack-dev-middleware')(compiler, {hot: true, publicPath: config.output.publicPath, noInfo: true}))
app.use(require('webpack-hot-middleware')(compiler))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'))
})

const server = app.listen(3000, () => {
  console.log('Listening at http://localhost:%s', server.address().port)
})
