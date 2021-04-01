/**
 * @description user 的 controller， 主要做返回数据格式的统一处理，以及接口逻辑的处理
 * @author 小付君
 */

const { SuccessModel, FailModel } = require('../model/MessageModel');
const { 
  userNameNotExistMessage, 
  userNameExistMessage, 
  registryUserFailMessage, 
  userLoginFailMessage 
} = require('../constant/resMessage');
const { getUserInfo, createUser } = require('../server/user');
const genPassword = require('../util/cryp');

// 判断用户名是否存在
const isExist = async (userName) => {
  let result;
  // userName 是否有值
  if(userName) {
    result = await getUserInfo(userName);
  }

  if(result) {
    return new SuccessModel(result);
  }
  return new FailModel(userNameNotExistMessage);
}

// 注册用户
const registryUser = async ({ userName, password, gender }) => {
  let result;
  
  // 判断当前用户是否已存在
  if(userName) {
    result = await getUserInfo(userName);
  }

  if(result) {
    return new FailModel(userNameExistMessage);
  }

  // 不存在 进行注册
  result = await createUser({ 
    userName, 
    password: genPassword(password), 
    gender 
  });

  if(result) {
    return new SuccessModel(result);
  }
  return new FailModel(registryUserFailMessage);
}

// 用户登录
const userLogin = async (ctx, userName, password) => {
  const result = await getUserInfo(userName, genPassword(password));

  if(result) {
    // 处理 session
    ctx.session.userInfo = {
      userName: result.userName,
      nickName: result.nickName,
      gender: result.gender,
      picture: result.picture,
      city: result.city
    }
    return new SuccessModel(result);
  }
  return new FailModel(userLoginFailMessage);
}

module.exports = {
  isExist,
  registryUser,
  userLogin
}
