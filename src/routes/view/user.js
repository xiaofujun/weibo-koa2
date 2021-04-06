/**
 * @description 用户信息页面的路由
 * @author 小付君
 */

const router = require('koa-router')();

/**
 * 获取当前登录用户的信息
 * @param {object} ctx ctx 
 * @returns 
 */
function getLoginInfo(ctx) {
  let data = {
    isLogin: false
  }

  if(ctx.session && ctx.session.userInfo) {
    data = {
      isLogin: true,
      nickName: ctx.session.userInfo.nickName
    }
  }
  return data;
}

// 注册页面的路由
router.get('/registry', async (ctx, next) => {
  await ctx.render('user/registry');
})

// 登录页面的路由
router.get('/login', async (ctx, next) => {
  const loginInfo = getLoginInfo(ctx);
  await ctx.render('user/login', loginInfo);
})

module.exports = router;
