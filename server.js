const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet') 
const connection = require('./database/connection')
const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 7777
const app = express()

//Initializes Middleware
app.use(logger('dev'))
app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//Initializes Middleware

app.get('/', (request, response) => {
    response.send({message: 'Home route!'})
})
app.use('/api', AppRouter)

app.listen(PORT, async () => {
    try {
        await connection
        console.log(`Database is connected`)
        console.log(`App is listening on port ${PORT}`)
    } catch (error) {
        throw new Error (`Uh-oh, there's an error with the connection.`)
    }
})