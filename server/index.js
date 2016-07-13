const fallback = require('express-history-api-fallback')
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')

const app = express()
const root = '/home/ollie/Workspace/cryptonite_react/public'
console.log('this is the root path : ', root)
const port = process.env.PORT || 1331
app.use(express.static(path.join(__dirname, '/../public')))
app.use(fallback('index.html', { root }))
app.use(favicon(path.join(__dirname, '/../public/favicon.ico')))

console.log('********************************************')
console.log('Server status: Online')
console.log('********************************************')
console.log('Cryptonite is listening on port: ' + port);
console.log('********************************************')
app.listen(port)
