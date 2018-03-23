const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost/ele-admin'
const glob = require('glob')
const {join} = require('path')

mongoose.Promise = global.Promise
// 导入所有的schema
glob.sync(join(__dirname, './model', '**/*.js')).forEach(require)

mongoose.set('debug', true)

mongoose.connect(DB_URL)
const db = mongoose.connection
db.on('disconnected', () => {
  mongoose.connect(DB_URL)
})

db.on('error', err => {
  console.log(err)
})

db.once('open', () => {
  console.log('数据库已连接')
})
