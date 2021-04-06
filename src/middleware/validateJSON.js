/**
 * @description 用户信息 json 数据的校验中间件
 * @author 小付君
 */

const { FailModel } = require('../model/MessageModel');
const { jsonSchemaValidateFail } = require('../constant/resMessage');

function validateJSON(validateFn) {
  return async function(ctx, next) {
    const data = ctx.request.body;
    const valid = validateFn(data);

    if(!valid) {
      ctx.body = new FailModel(jsonSchemaValidateFail);
      return;
    }
    await next();
  }
}

module.exports = validateJSON;
