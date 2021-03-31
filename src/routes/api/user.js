/**
 * @description /api/user 相关的路由
 * @author 小付君
 */

const router = require('koa-router')();

router.prefix('/api/user');

router.get('/string', async (ctx, next) => {
  ctx.body = '这是一串字符串';
})

module.exports = router;
