/**
 * @description json schema validator
 * @author 小付君 
 */

const Ajv = require('ajv');

// 实例化 agv
const ajv = new Ajv();

/**
 * 校验 json schema
 * @param {object} schema 
 * @param {object} data 
 * @returns boolean
 */
function validator(schema, data) {
  const valid = ajv.validate(schema, data);
  return valid;
}

module.exports = validator;
