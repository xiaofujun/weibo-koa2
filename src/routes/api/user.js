/**
 * @description /api/user 相关的路由，主要做权限校验
 * @author 小付君
 */

const router = require('koa-router')();
const { isExist, registryUser, userLogin } = require('../../controller/user');
const checkUserInfoJSON = require('../../util/checkJSON/checkUserInfoJSON');
const validateJSON = require('../../middleware/validateJSON');

router.prefix('/api/user');

// 校验用户名是否已存在
router.get('/isExist', async (ctx, next) => {
  // 调用 controller 中的方法
  ctx.body = await isExist(ctx.query.userName);
})

// 注册用户
router.post('/registry', validateJSON(checkUserInfoJSON), async (ctx, next) => {
  // 1. 校验提交的数据是否符合需求 json schema
  ctx.body = await registryUser(ctx.request.body);
})

// 用户登录
router.post('/login', async (ctx, next) => {
  // 通过 controller 获取数据
  const {
    userName,
    password
  } = ctx.request.body;

  ctx.body = await userLogin(ctx, userName, password);
})

module.exports = router;
