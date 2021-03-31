/**
 * @description 用户信息页面的路由
 * @author 小付君
 */

const router = require('koa-router')();

// 注册页面的路由
router.get('/registry', async (ctx, next) => {
  await ctx.render('user/registry');
})

// 登录页面的路由
router.get('/login', async (ctx, next) => {
  await ctx.render('user/login');
})

module.exports = router;
