/**
 * @description 校验中间件
 * @author 小付君
 */

const { FailModel } = require('../model/MessageModel');
const { userNotLoginMessage } = require('../constant/resMessage');

/**
 * view 层级的权限校验，若未登录，则跳转到登录页
 * @param {object} ctx ctx
 * @param {fn} next next
 * @returns 
 */
async function viewCheckLoginMiddleWare(ctx, next) {
  if(ctx.session.userInfo) {
    await next();
  } else {
    ctx.redirect('/login');
  }
}

/**
 * api 层级的权限校验，若请求有权限的接口时，未登录，则出现提示
 * @param {object} ctx ctx
 * @param {fn} next next
 * @returns 
 */
async function apiCheckLoginMiddleWare(ctx, next) {
  if(ctx.session.userInfo) {
    await next();
    return;
  }
  ctx.body = new FailModel(userNotLoginMessage);
}

module.exports = {
  viewCheckLoginMiddleWare,
  apiCheckLoginMiddleWare
}
