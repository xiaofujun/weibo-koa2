/**
 * @description 数据库的配置
 * @author 小付君
 */

const { isDev, isPro } = require('../util/env');

let DB_CONFIG = {};

if(isDev) {
  DB_CONFIG = {
    host: 'localhost',
    port: 3307,
    account: 'root',
    password: 'root',
    database: 'weibo_blog'
  }
}

if(isPro) {
  DB_CONFIG = {
    host: 'localhost',
    port: 3306,
    account: 'root',
    password: 'root',
    database: 'weibo_blog'
  }
}

module.exports = DB_CONFIG;
