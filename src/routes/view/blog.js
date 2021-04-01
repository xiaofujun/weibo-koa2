/**
 * @description 博客列表
 * @author 小付君
 */

const router = require('koa-router')();
const { viewCheckLoginMiddleWare } = require('../../middleware/checkLogin');

router.get('/', viewCheckLoginMiddleWare, async (ctx, next) => {
  await ctx.render('blog/list');
})

module.exports = router;
