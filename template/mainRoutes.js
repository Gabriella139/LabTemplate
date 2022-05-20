const path = require('path')
const express = require('express')
const mainRouter = express.Router()
mainRouter.get('/', function (req, res) {
    res.send('Hello World. I\'m a Node app.')
    })
mainRouter.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})
module.exports = mainRouter
