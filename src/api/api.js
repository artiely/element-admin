import fetch from './fetch'

/**
 * 登录
 * @param {String} username
 * @param {String} password
 */
const LOGIN = params => {
  console.log('我执行了')
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

const apiList = {
  LOGIN,
  GET_MENU,
  GET_USER_INFO
}

export default apiList
