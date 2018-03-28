import Mock from 'mockjs'
// 设置响应时间
Mock.setup({ timeout: '200-2000' })
// var obj = {aa: '11', bb: '22', cc: '33', dd: '44'}
var user = [
  {
    name: '戴丽',
    id: 98,
    age: 19,
    birthday: '1985-01-03',
    city: '台湾 桃园县',
    isMale: true,
    visible: false
  },
  {
    name: '田芳',
    id: 99,
    age: 28,
    birthday: '2007-04-15',
    city: '重庆 重庆市',
    isMale: false,
    visible: false
  },
  {
    name: '卢敏',
    id: 100,
    age: 27,
    birthday: '1981-05-29',
    city: '山东省 烟台市',
    isMale: true,
    visible: false
  },
  {
    name: '唐磊',
    id: 101,
    age: 24,
    birthday: '1977-05-19',
    city: '江苏省 镇江市',
    isMale: true,
    visible: false
  },
  {
    name: '冯霞',
    id: 102,
    age: 25,
    birthday: '1975-04-08',
    city: '上海 上海市',
    isMale: false,
    visible: false
  },
  {
    name: '梁芳',
    id: 103,
    age: 25,
    birthday: '1986-05-07',
    city: '天津 天津市',
    isMale: false,
    visible: false
  },
  {
    name: '谭明',
    id: 104,
    age: 27,
    birthday: '1989-04-12',
    city: '澳门特别行政区 离岛',
    isMale: true,
    visible: false
  },
  {
    name: '谭娟',
    id: 105,
    age: 25,
    birthday: '1996-06-11',
    city: '福建省 泉州市',
    isMale: false,
    visible: false
  },
  {
    name: '曾勇',
    id: 106,
    age: 24,
    birthday: '1976-05-19',
    city: '广东省 中山市',
    isMale: false,
    visible: false
  },
  {
    name: '乔霞',
    id: 107,
    age: 27,
    birthday: '1974-09-15',
    city: '江西省 萍乡市',
    isMale: false,
    visible: false
  }
]
// Mock响应模板
Mock.mock('/api/user', 'get', {
  /* 'user|10': [{ // 生成10个数组元素
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
  }] */
  data: user
})

Mock.mock('/api/user', 'delete', function(options) {
  console.log(options)
  let query = JSON.parse(options.body)
  var ids = query.ids
  let data = user.filter(item => {
    return ids.indexOf(item.id) === -1
  })
  return {code: 0, data: data}
// 返回这个数组,也就是返回处理后的假数据
})
// 新增
Mock.mock('/api/user', 'post', function(options) {
  console.log(options)
  let query = JSON.parse(options.body)
  query.id = user[user.length - 1].id++
  user.unshift(query)
  return {code: 0, data: user}
})

// 修改
Mock.mock('/api/user', 'put', function(options) {
  console.log(options)
  let query = JSON.parse(options.body)
  let id = query.id
  let data = user.map((item) => {
    if (item.id === id) {
      item.age = query.age
      item.name = query.name
      item.birthday = query.birthday
      item.city = query.city
      item.isMale = query.isMale
    }
    return item
  })
  return {code: 0, data: data}
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
