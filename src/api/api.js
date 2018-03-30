import fetch from './fetch'

/**
 * 登录
 * @param {String} username
 * @param {String} password
 */
const LOGIN = params => {
  return fetch({url: '/api/login', method: 'post', data: params})
}

/**
 * 获取菜单
 */
const GET_MENU = params => {
  return fetch({url: `/api/menu`, method: 'get', params: params})
}
/**
 * 获取用户信息
 */
const GET_USER_INFO = params => {
  return fetch({url: `/api/info`, method: 'get', params: params})
}

/**
 * 获取用户列表
 */
const GET_USER_LIST = params => {
  return fetch({url: `/api/user`, method: 'get', params: params})
}

/**
 * 删除用户列表
 */
const DELETE_USER_LIST = params => {
  return fetch({url: `/api/user`, method: 'delete', data: params})
}

/**
 * 新增用户
 */
const ADD_USER = params => {
  return fetch({url: `/api/user`, method: 'post', data: params})
}

/**
 * 修改用户
 */
const EDIT_USER = params => {
  return fetch({url: `/api/user`, method: 'put', data: params})
}

const apiList = {
  LOGIN,
  GET_MENU,
  GET_USER_INFO,
  GET_USER_LIST,
  DELETE_USER_LIST,
  ADD_USER,
  EDIT_USER
}

export default apiList
