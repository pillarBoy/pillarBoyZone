/**
 * @session 就是在服务端用一个变量把用户的登录信息缓存起来，以便后续判断用户是否登录
 * 这里用一个变量缓存，放在内存里面。
 */


var http = require('http')

var session = {}

http.createServer((req, res) => {
  if (req.url === 'favicon.ico') return res.end('');
  res.setHeader('Content-Type', 'text/html;charset=UTF-8')

  // 取cookie
  let { cookie } = req.headers;
  // if (cookie && cookie.indexOf('uid') > -1) {
  if (cookie && cookie.indexOf('uid') > -1) {
    let reg = new RegExp(`uid=([^;]+);?\s*`)

    if (reg.exec(cookie)[1] === session.uid) {
      res.end('你已经登录了。')
    } else {
      res.end('登录超时了，请重新登录。')
    }

  } else {
    var id = (Math.random() * 19999).toFixed(10)
    res.setHeader('Set-Cookie', `uid=${id}`)
    session.uid = id;
    res.end('欢迎登录。。。。')
  }
})
  .listen(3301)