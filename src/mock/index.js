import Mock from 'mockjs'
// 设置响应时间
Mock.setup({ timeout: '200-2000' })
var obj = {aa: '11', bb: '22', cc: '33', dd: '44'}
// Mock响应模板
Mock.mock('/api/user', {
  'user|10': [{ // 生成10个数组元素
    'name': '@cname', // 中文名称
    'id|+1': 88, // 属性值自动加 1，初始值为88
    'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
    'birthday': '@date("yyyy-MM-dd")', // 日期
    'city': '@city(true)', // 中国城市
    'color': '@color', // 16进制颜色
    'isMale|1': true, // 布尔值
    'isFat|1-2': true, // true的概率是1/3
    'fromObj|2': obj, // 从obj对象中随机获取2个属性
    'fromObj2|1-3': obj, // 从obj对象中随机获取1至3个属性
    'brother|1': ['jack', 'jim'], // 随机选取 1 个元素
    'sister|+1': ['jack', 'jim', 'lily'], // array中顺序选取元素作为结果
    'friends|2': ['jack', 'jim'] // 重复2次属性值生成一个新数组
  }]
})

/* Mock.mock('/api/login', function(options) {
  console.log(options)
  let data = null
  try {
    data = JSON.parse(options.body)
  } catch (error) {
    console.log(error)
  }
  console.log(data)
  if (data.username === 'admin' && data.password === '123') {
    return Mock.mock({code: 0, role: 'admin'})
  } else if (data.username === 'guest' && data.password === '123') {
    return Mock.mock({code: 0, role: 'guest'})
  } else {
    return Mock.mock({code: -1, mes: '用户名或密码错误'})
  }
}) */

export default Mock
