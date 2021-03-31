/**
 * @description ORM 同步模型到数据库
 * @author 小付君
 */

const sequelize = require('./seq');

require('./model');

// 同步
!(async function() {
  await sequelize.sync({force: true});
})()

