/**
 * @description 返回数据的统一格式
 * @author 小付君
 */

class BaseModel {
  constructor(errno, data, message) {
    this.errno = errno;
    if(data) {
      this.data = data;
    }
    if(message) {
      this.message = message;
    }
  }
}

// 成功时接口的数据格式
class SuccessModel extends BaseModel {
  constructor(data) {
    super('0', data);
  }
}

// 失败时接口的数据格式
class FailModel extends BaseModel {
  constructor({errno, data, message}) {
    super(errno, data, message);
  }
}

module.exports = {
  SuccessModel,
  FailModel
}
