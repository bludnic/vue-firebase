const path = require('path')
const express = require('express')
const serveStatic = require('serve-static')

const PORT = process.env.PORT || 5000

const app = express()

app.use(serveStatic(path.join(__dirname, '/dist')))

app.listen(PORT)

console.log('Server listen on', PORT)
