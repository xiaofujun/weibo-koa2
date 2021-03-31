/**
 * @description redis 连接的配置
 * @author 小付君
 */

const { isDev, isPro } = require('../util/env');

let REDIS_CONFIG = {};

if(isDev) {
  REDIS_CONFIG = {
    host: 'localhost',
    port: 6379
  }
}

if(isPro) {
  REDIS_CONFIG = {
    host: 'localhost',
    port: 6379
  }
}

module.exports = REDIS_CONFIG;
