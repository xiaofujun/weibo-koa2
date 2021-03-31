/**
 * @description 环境变量封装
 * @author 小付君
 */

const { NODE_ENV } = process.env;

module.exports = {
  isDev: NODE_ENV === 'dev',
  notDev: NODE_ENV != 'dev',
  isPro: NODE_ENV === 'production',
  notPro: NODE_ENV != 'production',
}
