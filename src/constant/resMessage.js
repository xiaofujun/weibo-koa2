/**
 * @description 接口的响应数据的提示信息
 * @author 小付君
 */

module.exports = {
  userNameNotExistMessage: {
    errno: '10001',
    message: '用户名未注册'
  },
  userNameExistMessage: {
    errno: '10002',
    message: '用户名已存在'
  },
  registryUserFailMessage: {
    errno: '10003',
    message: '用户注册失败'
  },
  userLoginFailMessage: {
    errno: '10004',
    message: '用户登录失败'
  },
  userNotLoginMessage: {
    errno: '10005',
    message: '用户未登录'
  },
  jsonSchemaValidateFail: {
    errno: '1006',
    message: '用户输入的数据格式不合法'
  }
}
