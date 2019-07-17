var Koa = require('koa')
var redis = require('redis')
var session = require('koa-session')
var redisStore = require('koa-redis')

var redisClient = redis.createClient(6379, 'localhost')
var wrapper = require('co-redis')
var client = wrapper(redisClient)


var app = new Koa()
app.keys = ['some secret']

let store = redisStore({ client })

app.use(session({
  key: 'koassredis',
  store,
  // maxAge: 10000,
  // httpOnly: true,
  // signed: true
}, app))

app.use(async (ctx) => {

  if (ctx.path === '/favicon.ico') {
    ctx.body = ''
  }
  let count = await store.client.get('count')
  count++
  await store.client.set('count', count)
  ctx.body = count
})

app.listen(3301)