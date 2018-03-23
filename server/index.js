const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const server = require('http').Server(app)
const userRouter = require('./router/user')
require('./db/index')

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/api', userRouter)
server.listen(9111, function() {
  console.log('Node app start at port 9111')
})
