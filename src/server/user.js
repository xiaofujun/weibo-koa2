/**
 * @description user 相关的增删改查，以及数据的格式化
 * @author 小付君
 */

const { User } = require('../db/model');

// 查询
const getUserInfo = async (userName, password) => {
  const whereOpt = {
    userName
  };

  if(password) {
    whereOpt.password = password;
  }

  // 查询数据
  const result = await User.findOne({
    where: whereOpt
  });

  if(!result) {
    return result;
  }

  return result.dataValues;
}

// 新增用户
const createUser = async ({ userName, password, gender, nickName }) => {
  const userInfo = {
    userName, 
    password, 
    nickName: nickName || userName,
    gender
  };
  const result = await User.create(userInfo);
  
  return result.dataValues;
}

module.exports = {
  getUserInfo,
  createUser
}
