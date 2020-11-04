const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/node-mongo-basic';
const config = require('../config/config')

module.exports = () => {
    const connect = () => {
        mongoose.Promise = global.Promise;
        mongoose.connect(
            DB_URL,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) => {
                let dbStatus = ''
                if (err) {
                    dbStatus = `Error connecting to DB: ${err}`
                }
                dbStatus = 'DB CONNECT '
                console.log(`MONGO DB : ${DB_URL}`)
                console.log(`Server PORT  : ${config.PORT}`)
                console.log(dbStatus)
            }
        )
        mongoose.set('useCreateIndex', true)
        mongoose.set('useFindAndModify', false)
    }
    connect()

    mongoose.connection.on('error', console.log)
    mongoose.connection.on('disconnected', connect)
}