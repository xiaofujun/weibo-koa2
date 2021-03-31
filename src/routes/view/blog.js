/**
 * @description 博客列表
 * @author 小付君
 */

const router = require('koa-router')();

router.get('/', async (ctx, next) => {
  await ctx.render('blog/list');
})

module.exports = router;
