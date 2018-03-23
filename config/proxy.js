var proxyList = {
  '/api': {
    target: 'http://localhost:9111',
    changeOrigin: true,
  },
}

console.log('设置代理中...', proxyList)
module.exports = {
  proxyList,
}
