const express = require('express')
const Router = express.Router()
const {resolve} = require('path')
const fs = require('fs')
Router.get('/menu', function(req, res, next) {
  // 同步读取文件
  let _res = fs.readFileSync(
    resolve(__dirname, '../../src/router/routs.json'),
    'utf-8'
  )
  try {
    _res = JSON.parse(_res)
  } catch (error) {
    console.log(error)
  }
  let {userid} = req.cookies
  if (!userid) {
    return res.json({code: 500, data: [], msg: '请登录'})
  }
  return res.json({code: 0, data: _res})
})

Router.post('/login', function(req, res, next) {
  let {username, password} = req.body
  console.log(username, password)
  if (username === 'admin' && password === '123') {
    res.cookie('userid', 'admin')
    return res.json({code: 0, data: [], role: 'admin'})
  } else if (username === 'guest' && password === '123') {
    res.cookie('userid', 'guest')
    return res.json({code: 0, data: [], role: 'guest'})
  } else {
    return res.json({
      code: 500,
      data: [],
      error: '用户名或密码错误'
    })
  }
})

Router.get('/info', function(req, res) {
  const {userid} = req.cookies
  if (!userid) {
    return res.json({code: 1, data: [], msg: '请登录'})
  } else if (userid === 'admin') {
    return res.json({
      code: 0,
      data: [{username: 'admin'}],
      role: 'admin'
    })
  } else {
    return res.json({
      code: 0,
      data: [{username: 'guest'}],
      role: 'guest'
    })
  }
})

module.exports = Router
