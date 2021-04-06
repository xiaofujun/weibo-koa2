/**
 * @description 创建 User 模型
 * @author 小付君
 */

const sequelize = require('../seq');
const { STRING, DECIMAL } = require('../types');

// 创建 user 模型，同步后到数据库是 users
const User = sequelize.define('user', {
  userName: {
    type: STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: STRING,
    allowNull: false
  },
  gender: {
    type: DECIMAL,
    defaultValue: 3
  },
  nickName: STRING,
  picture: STRING,
  city: STRING
});

module.exports = User;
