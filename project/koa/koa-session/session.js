var Koa = require('koa')
var session = require('koa-session')

var app = new Koa()

app.keys = ['my secret']

const SESS_CONFIG = {
  key: 'koa:sess',
  maxAge: 5000,
  httpOnly: true,
  signed: true
}

app.use(session(SESS_CONFIG, app))

app.use(ctx => {
  if (ctx.path === '/favicon.ico') {
    ctx.body = ''
  }
  // 获取
  let n = ctx.session.count || 0;
  // 设置
  ctx.session.count = ++n;
  ctx.body = `你访问了${n}次了`
})

app.listen(3301)