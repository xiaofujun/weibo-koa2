/**
 * @description 用户注册信息的检测 json schema
 * @author 小付君
 */

const validator = require('./_validator');

const schema = {
  type: 'object',
  properties: {
    userName: {
      type: 'string',
      pattern: '^[A-Za-z_]*'
    },
    password: {
      type: 'string',
      minLength: 3,
    },
    gender: {
      type: 'integer',
      minimum: 1,
      // maximum: 3
    }
  },
  required: [
    'userName',
    'password',
    'gender'
  ]
};

/**
 * 验证 user 信息是否符合规范
 * @param {object} data 
 * @returns 
 */
function checkUserInfoJSON(data) {
  const valid = validator(schema, data);
  return valid;
}

module.exports = checkUserInfoJSON;
