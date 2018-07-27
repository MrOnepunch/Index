const express = require('express')

const index = express.Router()

index.get('/', (request, response) => {
    response.render('index/index.html')
})

module.exports = index