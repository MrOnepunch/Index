const express = require('express')
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
const session = require('cookie-session')
const path = require('path')

const log = console.log.bind(console)

const index = require('./routes/index')

const app = express()

app.use(bodyParser.urlencoded({
    extended: true,
}))

nunjucks.configure('templates', {
    autoescape: true,
    express: app,
    noCache: true,
})

const asset = path.join(__dirname, 'static')
app.use('/static', express.static(asset))

app.use('/', index)
const run = (port=3000, host='') => {
    const server = app.listen(port, host, () => {
        const address = server.address()
        log(`listening server at http://${address.address}:${address.port}`)
    })
}

if (require.main === module) {
    const port = 5000
    const host = '0.0.0.0'
    run(port, host)
}
