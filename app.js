const express = require('express')
const app = express()
const admin = require('./routes/admin')
const users = require('./routes/users')
const questions = require('./routes/questions')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found-handler')
const errorHandler = require('./middleware/error-handler')
const cors = require('cors')

// middleware
app.use(cors())
app.use(express.json())
//routes
app.use('/api/v1/users', users)
app.use('/api/v1/questions', questions)
app.use('/api/v1/admins', admin)
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 3000;
// start
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,"0.0.0.0", console.log('Listen on port 3000'))
    } catch (error) {
        console.log(error)
    }
}

start()