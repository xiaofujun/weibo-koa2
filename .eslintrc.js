/**
 * @description eslint 检测的配置 （后期查找最合适的插件做为 rules）
 * @author 小付君
 */

module.exports = {
  parser: 'babel-eslint',
  rules: {
    'quotes': ['error', 'single'],
    'no-func-assign': 2, //禁止重复的函数声明
    'max-params': [0, 3],//函数最多只能有3个参数
    'wrap-iife': [2, 'inside'],//立即执行函数表达式的小括号风格
    'no-unused-vars': 1, // 定义了未使用的变量
  }
}
