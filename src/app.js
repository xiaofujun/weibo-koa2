const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session');
const redisStore = require('koa-redis');

const index = require('./routes/index')
const users = require('./routes/users')

const REDIS_CONFIG = require('./conf/redis');
const { COOKIE_SECRET } = require('./constant/security');

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// 设置 cookie 加密的 secret
app.keys = [COOKIE_SECRET];

// 处理 session
app.use(session({
  cookie: {
    path: "/",
    httpOnly: true,
    maxAge: 24 * 60 * 60
  },
  key: 'weibo.sid', //cookie name defaulting to koa.sid
  prefix: 'weibo:sess:', // session prefix for store, defaulting to koa:sess:
  store: redisStore({
    all: `${REDIS_CONFIG.host}:${REDIS_CONFIG.port}`
  })
}))

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
