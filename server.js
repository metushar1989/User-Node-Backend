require('dotenv-safe').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const initMongo = require('./config/mongo')
const path = require('path')

// Setup express server port from ENV, default: 3000
app.set('port', process.env.PORT || 3000)

// Enable only in development HTTP request logger middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// for parsing json
app.use(
    bodyParser.json({
        limit: '20mb'
    })
)
// for parsing application/x-www-form-urlencoded
app.use(
    bodyParser.urlencoded({
        limit: '20mb',
        extended: true
    })
)



// Init all other stuff
app.use(cors())
app.use(require('./app/routes'))
app.listen(app.get('port'))

// Init MongoDB
initMongo()


module.exports = app // for testing
