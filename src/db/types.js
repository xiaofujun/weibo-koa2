/**
 * @description 数据库字段类型
 * @author 小付君
 */

const { DataTypes } = require('sequelize');

module.exports = {
  STRING: DataTypes.STRING,
  TEXT: DataTypes.TEXT,
  INTEGER: DataTypes.INTEGER,
  DECIMAL: DataTypes.DECIMAL
}
