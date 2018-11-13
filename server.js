const path = require('path')
const express = require('express')
const serveStatic = require('serve-static')

const PORT = process.env.PORT || 5000

app = express()

app.use(serveStatic(__dirname + '/dist'))

app.listen(PORT)

console.log('Server listen on', PORT)
