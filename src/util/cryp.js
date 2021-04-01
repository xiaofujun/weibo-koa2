/**
 * @description 密码加密
 * @author 小付君
 */

const crypto = require('crypto');
const { PASSWORD_SECRET } = require('../constant/security');

/**
 * 使用 MD5 加密
 * @param {string} content 要加密的字符串 
 * @returns 
 */
function _md5(content) {
  const md5 = crypto.createHash('md5').update(content).digest('hex');
  return md5; 
}

function genPassword(content) {
  content = `password=${content}&secret=${PASSWORD_SECRET}`;
  return _md5(content);
}

module.exports = genPassword;
