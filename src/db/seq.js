/**
 * @description ORM操作连接数据库
 * @author 小付君
 */

const { Sequelize } = require('sequelize');
const { host, port, database, account, password } = require('../conf/db');

const conf = {
  host,
  port,
  dialect: 'mysql',
}

// 创建连接实例
const sequelize = new Sequelize(database, account, password, conf);

// !(async function() {
//   await sequelize.authenticate();
//   console.log('连接成功')
// })()

module.exports = sequelize;
